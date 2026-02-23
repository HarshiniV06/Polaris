import { useState } from "react";
import HealthScoreCard from "./components/intelligence/HealthScoreCard";
import ContributorStatus from "./components/intelligence/ContributorStatus";
import AlertsPanel from "./components/intelligence/AlertsPanel";
import AISummaryPanel from "./components/intelligence/AISummaryPanel";
import LoadingSkeleton from "./components/intelligence/LoadingSkeleton";
import { generateAlerts } from "./components/intelligence/intelligenceUtils";


function AppPerson3() {
  const [isLoading, setIsLoading] = useState(false);
  const alerts = generateAlerts(mockData.contributors);

  const handleToggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", padding: 32 }}>
      <div className="container">
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: 28 }}>🧠 Person 3: Intelligence + UX</h1>
          <p style={{ color: "#64748b", marginTop: 8 }}>AI-powered insights and smart alerts</p>
          <button 
            onClick={handleToggleLoading}
            style={{
              marginTop: 16,
              padding: "8px 16px",
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer"
            }}
          >
            {isLoading ? "Show Data" : "Show Loading State"}
          </button>
        </div>

        <div className="grid" style={{ gap: 24 }}>
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              {/* Health Score & AI Summary */}
              <div className="grid grid-2">
                <HealthScoreCard score={mockData.healthScore} />
                <AISummaryPanel summary={mockData.aiSummary} />
              </div>

              {/* Contributor Status */}
              <ContributorStatus contributors={mockData.contributors} />

              {/* Alerts */}
              <AlertsPanel alerts={alerts} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default AppPerson3;
