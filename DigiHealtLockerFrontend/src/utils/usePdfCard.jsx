import React from 'react';
import { Document, Page } from 'react-pdf';
import "../components/pages/doctor/term.css"

const UsePdfCard = ({ url }) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(false);

  const togglePdf = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pdf-card-container cursor-pointer">
      <div className="pdf-document">
        <Document
          file={url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div className="pdf-page" key={`page_${index + 1}`}>
              <Page pageNumber={index + 1} width={450} />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};
export default UsePdfCard;

