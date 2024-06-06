import React from 'react';
import { Document, Page } from 'react-pdf';

const UsePdfCard = ({ url }) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(false);

  const togglePdf = () => {
    setIsOpen(!isOpen);
  };
  console.log("hi");
  return (
    <div className="w-1/2 rounded overflow-hidden m-4 cursor-pointer ">
      <div className="">
        <Document
          file={url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={1} width={500} />
          ))}
        </Document>

      </div>
    </div>
  );
};
export default UsePdfCard;

