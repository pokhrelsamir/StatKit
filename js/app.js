/**
 * StatKit
 * Main Application
 */

const dataInput = document.getElementById("dataInput");
const varianceType = document.getElementById("varianceType");

const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

const errorMessage = document.getElementById("errorMessage");

const resultsSection = document.getElementById("resultsSection");
const historyList = document.getElementById("historyList");

const datasetCount = document.getElementById("datasetCount");


/**
 * Parse dataset input
 */
function parseInput(input) {

    return input
        .split(/[\s,]+/)
        .map(value => value.trim())
        .filter(Boolean)
        .map(Number);
}


/**
 * Validate dataset
 */
function validateValues(values) {

    if (!values.length) {
        return "Please enter at least one number.";
    }

    if (values.some(value => !Number.isFinite(value))) {
        return "Please enter valid numbers only.";
    }

    return null;
}


/**
 * Format numbers for display
 */
function formatNumber(value) {

    if (typeof value !== "number") {
        return value;
    }

    return Number.isInteger(value)
        ? value.toString()
        : value.toFixed(4).replace(/0+$/, "").replace(/\.$/, "");
}


/**
 * Display results
 */
function displayResults(results, values) {

    document.getElementById("count").textContent =
        formatNumber(results.count);

    document.getElementById("sum").textContent =
        formatNumber(results.sum);

    document.getElementById("mean").textContent =
        formatNumber(results.mean);

    document.getElementById("median").textContent =
        formatNumber(results.median);

    document.getElementById("mode").textContent =
        results.mode.length
            ? results.mode.map(formatNumber).join(", ")
            : "No mode";

    document.getElementById("minimum").textContent =
        formatNumber(results.minimum);

    document.getElementById("maximum").textContent =
        formatNumber(results.maximum);

    document.getElementById("range").textContent =
        formatNumber(results.range);

    document.getElementById("variance").textContent =
        formatNumber(results.variance);

    document.getElementById("standardDeviation").textContent =
        formatNumber(results.standardDeviation);


    /*
     * Dataset Analysis
     */

    const sorted = getSortedValues(values);
    const unique = getUniqueValues(values);

    const firstQuartile = getQ1(values);
    const thirdQuartile = getQ3(values);
    const interquartileRange = getIQR(values);

    sortedData.textContent =
        sorted.map(formatNumber).join(", ");

    uniqueValues.textContent =
        unique.length;

    q1.textContent =
        formatNumber(firstQuartile);

    q3.textContent =
        formatNumber(thirdQuartile);

    iqr.textContent =
        formatNumber(interquartileRange);


    /*
     * Frequency Table
     */

    const frequencies =
        getFrequencyDistribution(values);

    frequencyTable.innerHTML =
        frequencies.map(item => `
            <tr>
                <td>${formatNumber(item.value)}</td>
                <td>${item.frequency}</td>
            </tr>
        `).join("");


    resultsSection.classList.remove("hidden");
    analysisSection.classList.remove("hidden");
}


/**
 * Calculate button
 */
calculateBtn.addEventListener("click", () => {

    errorMessage.textContent = "";

    const values = parseInput(dataInput.value);

    const error = validateValues(values);

    if (error) {
        errorMessage.textContent = error;
        resultsSection.classList.add("hidden");
        return;
    }

    const type = varianceType.value;

    const results = calculateStatistics(values, type);

    displayResults(results);

    datasetCount.textContent =
        `${values.length} value${values.length !== 1 ? "s" : ""}`;

    saveHistory(values, results, type);

    renderHistory();
});


/**
 * Clear current dataset
 */
clearBtn.addEventListener("click", () => {

    dataInput.value = "";

    errorMessage.textContent = "";

    resultsSection.classList.add("hidden");

    dataInput.focus();
});


/**
 * Render history
 */
function renderHistory() {

    const history = getHistory();

    if (!history.length) {

        historyList.innerHTML = `
            <div class="empty-history">
                No calculations yet.
            </div>
        `;

        return;
    }

    historyList.innerHTML = history.map(item => {

        const date = new Date(item.createdAt);

        return `
            <div class="history-item">

                <div class="history-info">

                    <strong>
                        ${item.values.slice(0, 8).join(", ")}
                        ${item.values.length > 8 ? "..." : ""}
                    </strong>

                    <span>
                        ${item.type} •
                        ${date.toLocaleString()}
                    </span>

                </div>

                <button
                    class="delete-history"
                    data-id="${item.id}"
                >
                    Delete
                </button>

            </div>
        `;

    }).join("");


    document.querySelectorAll(".delete-history")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id = Number(button.dataset.id);

                deleteHistory(id);

                renderHistory();
            });

        });
}


/**
 * Clear history
 */
clearHistoryBtn.addEventListener("click", () => {

    if (!getHistory().length) return;

    clearHistory();

    renderHistory();
});


/**
 * Allow Ctrl + Enter to calculate
 */
dataInput.addEventListener("keydown", event => {

    if (event.ctrlKey && event.key === "Enter") {

        calculateBtn.click();

    }

});


/**
 * Load history on startup
 */
renderHistory();


const analysisSection =
    document.getElementById("analysisSection");

const sortedData =
    document.getElementById("sortedData");

const uniqueValues =
    document.getElementById("uniqueValues");

const q1 =
    document.getElementById("q1");

const q3 =
    document.getElementById("q3");

const iqr =
    document.getElementById("iqr");

const frequencyTable =
    document.getElementById("frequencyTable");