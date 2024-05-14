import React, { useEffect, useState } from 'react'
import PatientHeader from './PatientHeader'
import { useAuth } from '../../../Store/AuthClient';
import { Document, Page, pdfjs } from 'react-pdf';
import JSZip from 'jszip';

const PatientDashboard = () => {
    let { user } = useAuth();
    const [noFile, setFileHaveNo] = useState(false);
    const [pdfUrls, setPdfUrls] = useState([]);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const getThePdf = async () => {
        if (user) {
            console.log(user.aadharcardnumber);
            const dataInput = {
                aadharcardnumber: user.aadharcardnumber
            }
            console.log("The data to send:", dataInput);
            const resposen = await fetch('/api/userPdfAll', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataInput),

            });

            if (resposen.status == 404) {
                setFileHaveNo(true);
                return;
            }

            const blob = await resposen.blob();

            const data = await JSZip.loadAsync(blob);
            console.log("The data will get:", data);

            const urls = [];
            await Promise.all(
                Object.keys(data.files).map(async (filename) => {
                    const file = data.files[filename];
                    console.log(file);
                    if (filename.endsWith('.pdf')) {
                        const url = URL.createObjectURL(await file.async('blob'));
                        urls.push(url);
                    }
                })
            );

            setFileHaveNo(false);
            setPdfUrls(urls);




        }






    }
    useEffect(() => {
        getThePdf();
    }, []);

    useEffect(() => {
        getThePdf();
    }, [user]);

    return (
        <>
            <PatientHeader />
            {
                noFile ? (<h1>There is no files to show</h1>) : (<div>
                    {pdfUrls.length > 0 && (
                        <div>
                            {pdfUrls.map((url, index) => (
                                <div key={`pdf_${index}`}>
                                    <Document
                                        file={url}
                                        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                                    >
                                        {Array.from(new Array(numPages), (el, index) => (
                                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                                        ))}
                                    </Document>
                                    <p>Page {pageNumber} of {numPages}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>)
            }
        </>
    )
}

export default PatientDashboard;

