import "./resourcesComp.css";

const ResourcesComp = () => {
  return (
    <div className="resources-page">
      <h2>Resources & References</h2>
      <p className="intro">
        Below is a list of reputable sources, documents, and organizations that support the claims and information presented across this website. We encourage you to explore, verify, and continue your own research.
      </p>

      <section className="resource-section">
        <h2>🧪 Scientific & Investigative Sources</h2>
        <ul>
          <li><a href="https://www.geoengineeringwatch.org" target="_blank" rel="noopener noreferrer">Geoengineering Watch</a> – Investigative journalism and whistleblower reports on chemtrails and atmospheric spraying.</li>
          <li><a href="https://www.ewg.org/tapwater" target="_blank" rel="noopener noreferrer">EWG Tap Water Database</a> – Testing results of U.S. municipal water supplies, contaminants, and health guidelines.</li>
          <li><a href="https://www.centerforfoodsafety.org" target="_blank" rel="noopener noreferrer">Center for Food Safety</a> – Research and advocacy on harmful food additives, pesticides, and genetic modification.</li>
          <li><a href="https://www.nrdc.org" target="_blank" rel="noopener noreferrer">Natural Resources Defense Council (NRDC)</a> – Environmental research and reporting on pollution and toxic chemicals.</li>
          <li><a href="https://climateviewer.org" target="_blank" rel="noopener noreferrer">ClimateViewer</a> – Environmental awareness tools and aerosol tracking technology.</li>
          <li><a href="https://www.consumerreports.org" target="_blank" rel="noopener noreferrer">Consumer Reports</a> – Independent testing of bottled water and consumer health risks.</li>
        </ul>
      </section>

      <section className="resource-section">
        <h2>📚 Government & Public Records</h2>
        <ul>
          <li><a href="https://www.epa.gov" target="_blank" rel="noopener noreferrer">U.S. Environmental Protection Agency (EPA)</a> – Official data on water safety, chemical limits, and pollution reports.</li>
          <li><a href="https://www.ncbi.nlm.nih.gov/pubmed" target="_blank" rel="noopener noreferrer">PubMed / NCBI</a> – Peer-reviewed research articles on contaminants, toxicology, and public health.</li>
          <li><a href="https://www.fda.gov/food" target="_blank" rel="noopener noreferrer">U.S. FDA Food Safety</a> – Approved additives and international comparison data.</li>
          <li><a href="https://www.cdc.gov" target="_blank" rel="noopener noreferrer">Centers for Disease Control and Prevention (CDC)</a> – Reports on environmental exposure and developmental health effects.</li>
          <li><a href="https://www.foia.gov" target="_blank" rel="noopener noreferrer">Freedom of Information Act (FOIA)</a> – Learn how to request official government records for yourself.</li>
        </ul>
      </section>

      <section className="resource-section">
        <h2>📢 Advocacy & Awareness</h2>
        <ul>
          <li><a href="https://www.momsacrossamerica.com" target="_blank" rel="noopener noreferrer">Moms Across America</a> – Advocacy against GMOs and glyphosate in food.</li>
          <li><a href="https://www.anh-usa.org" target="_blank" rel="noopener noreferrer">Alliance for Natural Health</a> – Policy-focused health freedom organization.</li>
          <li><a href="https://www.chemtrailplanet.com" target="_blank" rel="noopener noreferrer">Chemtrail Planet</a> – Archives of atmospheric testing and visual documentation.</li>
        </ul>
      </section>

      <section className="resource-section disclaimer">
        <h2>⚠️ Disclaimer</h2>
        <p>
          This site is for informational and educational purposes only. The materials provided are based on publicly available research, investigative journalism, and personal accounts. We encourage you to critically analyze all information and consult trusted scientific and medical experts where necessary.
        </p>
      </section>
    </div>
  );
};

export default ResourcesComp;
