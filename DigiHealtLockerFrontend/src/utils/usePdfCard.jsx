import React from 'react';
import { Document, Page } from 'react-pdf';

export const usePdfCard = ({ url }) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(false);

  const togglePdf = () => {
    setIsOpen(!isOpen);
  };
  console.log("hi");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer" onClick={togglePdf}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">PDF Report</div>
        <p className="text-gray-700 text-base">Click to view</p>
      </div>
      {isOpen && (
        <div className="px-6 py-4">
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
      )}
    </div>
  );
};

