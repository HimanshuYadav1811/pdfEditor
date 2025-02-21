import React from "react";

const PdfViewer = ({ src }) => {
  const defaultPdf =
    "https://pdfobject.com/pdf/sample.pdf"; // CORS-friendly PDF

  const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(
    src || defaultPdf
  )}`;

  return (
    <div className="pdf_editor">
      <h2 className="text-xl font-bold mb-4">PDF Viewer Demo</h2>
      <iframe
        src={viewerUrl}
        width="600px"
        height="600px"
        style={{ border: "none",margin:"0 auto" }}
        title="PDF Viewer"
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="p-4">
      <PdfViewer />
    </div>
  );
}
