import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Header() {

  const downloadPDF = () => {
    const element = document.body; // Capture whole page

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210; 
      const pageHeight = 297;

      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add pages if content is long
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Tshepiso-Makuoa-CV.pdf");
    });
  };

  return (
    <header className="relative text-left mb-8 p-4 bg-gray-200 rounded-md shadow">
      <h1 className="text-4xl font-bold text-black-600">Tshepiso P Makuoa</h1>

      <p className="text-xl">
        Software Developer | Machine Learning | Project Manager
      </p>

      <p className="text-sm">
        Email: <a href="mailto:tshepisomakuoa02@gmail.com">tshepisomakuoa02@gmail.com </a>| Phone:<a href="tel:+27693246135">069 324 6135 </a>| LinkedIn: <a href="https://www.linkedin.com/in/tshepiso-makuoa-1089782a3/"
        className="text-blue-600 hover:text-red-600 ">LinkedIn Profile</a>
      </p>

      {/* Download PDF Button */}
      <button
        onClick={downloadPDF}
        className="absolute bottom-2 right-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Download CV (PDF)
      </button>
    </header>
  );
}
