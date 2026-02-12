import "../styles/base.css";

export default function Certifications() {
    const certificates = [
        { title: "JPMorgan Chase Software Engineer Job Simulation", date: "Feb 2026" },
      ];

      return (
        <>
            <h3>Certificates</h3>
            <div className="certificates-grid">
                {certificates.map((c, idx) => (
                <div key={idx} className="cert-card">
                    <h4 className="cert-title">{c.title}</h4>
                    <p className="cert-date">{c.date}</p>
                </div>
                ))}
            </div>
        </>
      )
    
}