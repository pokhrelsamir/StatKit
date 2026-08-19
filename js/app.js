/**
 * StatKit
 * Main Application
 *
 * Handles:
 * - Dataset input
 * - Validation
 * - Statistical calculations
 * - Dataset analysis
 * - Frequency distribution
 * - Calculation history
 * - UI interactions
 */


/* =========================
   DOM Elements
========================= */

const dataInput = document.getElementById("dataInput");
const varianceType = document.getElementById("varianceType");

const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

const errorMessage = document.getElementById("errorMessage");

const resultsSection =
    document.getElementById("resultsSection");

const analysisSection =
    document.getElementById("analysisSection");

const historyList =
    document.getElementById("historyList");

const datasetCount =
    document.getElementById("datasetCount");


/* =========================
   Result Elements
========================= */

const countElement =
    document.getElementById("count");

const sumElement =
    document.getElementById("sum");

const meanElement =
    document.getElementById("mean");

const medianElement =
    document.getElementById("median");

const modeElement =
    document.getElementById("mode");

const minimumElement =
    document.getElementById("minimum");

const maximumElement =
    document.getElementById("maximum");

const rangeElement =
    document.getElementById("range");

const varianceElement =
    document.getElementById("variance");

const standardDeviationElement =
    document.getElementById("standardDeviation");


/* =========================
   Analysis Elements
========================= */

const sortedDataElement =
    document.getElementById("sortedData");

const uniqueValuesElement =
    document.getElementById("uniqueValues");

const q1Element =
    document.getElementById("q1");

const q3Element =
    document.getElementById("q3");

const iqrElement =
    document.getElementById("iqr");

const frequencyTable =
    document.getElementById("frequencyTable");


/* =========================
   Parse Dataset
========================= */

/**
 * Convert user input into an array of numbers.
 *
 * Supports:
 * - Commas
 * - Spaces
 * - New lines
 *
 * Example:
 * 10, 20, 30
 *
 * becomes:
 * [10, 20, 30]
 */
function parseInput(input) {

    return input
        .split(/[\s,]+/)
        .map(value => value.trim())
        .filter(Boolean)
        .map(Number);
}


/* =========================
   Validate Dataset
========================= */

/**
 * Validate dataset values.
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


/* =========================
   Format Numbers
========================= */

/**
 * Format numbers for clean display.
 *
 * Maximum of 4 decimal places.
 */
function formatNumber(value) {

    if (typeof value !== "number") {
        return value;
    }

    if (!Number.isFinite(value)) {
        return "—";
    }

    return Number.isInteger(value)
        ? value.toString()
        : value
            .toFixed(4)
            .replace(/0+$/, "")
            .replace(/\.$/, "");
}


/* =========================
   Display Results
========================= */

/**
 * Display main statistical results.
 */
function displayResults(results) {

    countElement.textContent =
        formatNumber(results.count);

    sumElement.textContent =
        formatNumber(results.sum);

    meanElement.textContent =
        formatNumber(results.mean);

    medianElement.textContent =
        formatNumber(results.median);

    modeElement.textContent =
        results.mode.length
            ? results.mode.map(formatNumber).join(", ")
            : "No mode";

    minimumElement.textContent =
        formatNumber(results.minimum);

    maximumElement.textContent =
        formatNumber(results.maximum);

    rangeElement.textContent =
        formatNumber(results.range);

    varianceElement.textContent =
        formatNumber(results.variance);

    standardDeviationElement.textContent =
        formatNumber(results.standardDeviation);
}


/* =========================
   Display Dataset Analysis
========================= */

/**
 * Display additional dataset information.
 */
function displayAnalysis(values) {

    const sorted =
        getSortedValues(values);

    const unique =
        getUniqueValues(values);

    const firstQuartile =
        getQ1(values);

    const thirdQuartile =
        getQ3(values);

    const interquartileRange =
        getIQR(values);


    /* Sorted Dataset */

    sortedDataElement.textContent =
        sorted
            .map(formatNumber)
            .join(", ");


    /* Unique Values */

    uniqueValuesElement.textContent =
        unique.length;


    /* Quartiles */

    q1Element.textContent =
        formatNumber(firstQuartile);

    q3Element.textContent =
        formatNumber(thirdQuartile);

    iqrElement.textContent =
        formatNumber(interquartileRange);


    /* Frequency Distribution */

    const frequencies =
        getFrequencyDistribution(values);

    frequencyTable.innerHTML =
        frequencies
            .map(item => `
                <tr>
                    <td>${formatNumber(item.value)}</td>
                    <td>${item.frequency}</td>
                </tr>
            `)
            .join("");
}


/* =========================
   Show Results
========================= */

/**
 * Display all calculation sections.
 */
function showResults() {

    resultsSection.classList.remove("hidden");

    analysisSection.classList.remove("hidden");
}


/* =========================
   Hide Results
========================= */

/**
 * Hide all calculation sections.
 */
function hideResults() {

    resultsSection.classList.add("hidden");

    analysisSection.classList.add("hidden");
}


/* =========================
   Calculate
========================= */

/**
 * Perform statistical calculation.
 */
function calculateDataset() {

    errorMessage.textContent = "";

    const values =
        parseInput(dataInput.value);


    /* Validate */

    const error =
        validateValues(values);

    if (error) {

        errorMessage.textContent = error;

        hideResults();

        return;
    }


    /* Get variance type */

    const type =
        varianceType.value;


    /* Calculate */

    const results =
        calculateStatistics(values, type);


    /* Display */

    displayResults(results);

    displayAnalysis(values);

    showResults();


    /* Dataset count */

    datasetCount.textContent =
        `${values.length} value${values.length !== 1 ? "s" : ""}`;


    /* Save history */

    saveHistory(
        values,
        results,
        type
    );


    /* Refresh history */

    renderHistory();
}


/* =========================
   Clear Dataset
========================= */

/**
 * Clear current dataset and results.
 */
function clearDataset() {

    dataInput.value = "";

    errorMessage.textContent = "";

    datasetCount.textContent = "";

    hideResults();

    dataInput.focus();
}


/* =========================
   Render History
========================= */

/**
 * Render saved calculations.
 */
function renderHistory() {

    const history =
        getHistory();


    /* Empty state */

    if (!history.length) {

        historyList.innerHTML = `
            <div class="empty-history">
                No calculations yet.
            </div>
        `;

        return;
    }


    /* History items */

    historyList.innerHTML =
        history
            .map(item => {

                const date =
                    new Date(item.createdAt);

                const preview =
                    item.values
                        .slice(0, 8)
                        .map(formatNumber)
                        .join(", ");


                return `
                    <div class="history-item">

                        <div class="history-info">

                            <strong>
                                ${preview}
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

            })
            .join("");


    /* Delete buttons */

    document
        .querySelectorAll(".delete-history")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    deleteHistory(id);

                    renderHistory();
                }
            );

        });
}


/* =========================
   Clear History
========================= */

function handleClearHistory() {

    const history =
        getHistory();

    if (!history.length) {
        return;
    }

    clearHistory();

    renderHistory();
}


/* =========================
   Event Listeners
========================= */


/* Calculate */

calculateBtn.addEventListener(
    "click",
    calculateDataset
);


/* Clear Dataset */

clearBtn.addEventListener(
    "click",
    clearDataset
);


/* Clear History */

clearHistoryBtn.addEventListener(
    "click",
    handleClearHistory
);


/* Ctrl + Enter */

dataInput.addEventListener(
    "keydown",
    event => {

        if (
            event.ctrlKey &&
            event.key === "Enter"
        ) {
            calculateDataset();
        }

    }
);


/* =========================
   Initialize Application
========================= */

renderHistory();


/**
 * Render frequency chart
 */
function renderFrequencyChart(values) {

    const frequencies =
        getFrequencyDistribution(values);

    if (!frequencies.length) {

        frequencyChart.innerHTML = "";

        return;
    }

    const maxFrequency =
        Math.max(
            ...frequencies.map(item => item.frequency)
        );


    frequencyChart.innerHTML =
        frequencies
            .map(item => {

                const width =
                    (item.frequency / maxFrequency) * 100;

                return `
                    <div class="chart-row">

                        <div class="chart-label">
                            ${formatNumber(item.value)}
                        </div>

                        <div class="chart-track">

                            <div
                                class="chart-bar"
                                style="width: ${width}%"
                            ></div>

                        </div>

                        <div class="chart-value">
                            ${item.frequency}
                        </div>

                    </div>
                `;

            })
            .join("");
}