/**
 * StatKit
 * Statistical Calculation Engine
 *
 * Provides functions for calculating:
 * - Count
 * - Sum
 * - Mean
 * - Median
 * - Mode
 * - Minimum
 * - Maximum
 * - Range
 * - Variance
 * - Standard Deviation
 * - Sorted Values
 * - Unique Values
 * - Percentiles
 * - Quartiles
 * - IQR
 * - Frequency Distribution
 * - Z-Scores
 * - Z-Score Interpretation
 * - Percentile Summary
 */


/* =========================
   Basic Statistics
========================= */

/**
 * Count values
 */
function getCount(values) {
    return values.length;
}


/**
 * Calculate sum
 */
function getSum(values) {
    return values.reduce(
        (total, value) => total + value,
        0
    );
}


/**
 * Calculate arithmetic mean
 */
function getMean(values) {

    if (values.length === 0) {
        return 0;
    }

    return getSum(values) / values.length;
}


/**
 * Calculate median
 */
function getMedian(values) {

    if (values.length === 0) {
        return 0;
    }

    const sorted =
        [...values].sort((a, b) => a - b);

    const middle =
        Math.floor(sorted.length / 2);


    if (sorted.length % 2 === 0) {

        return (
            sorted[middle - 1] +
            sorted[middle]
        ) / 2;
    }


    return sorted[middle];
}


/**
 * Calculate mode
 *
 * Returns all modes when multiple values
 * have the highest frequency.
 */
function getMode(values) {

    if (values.length === 0) {
        return [];
    }


    const frequency = {};


    values.forEach(value => {

        frequency[value] =
            (frequency[value] || 0) + 1;

    });


    const maxFrequency =
        Math.max(
            ...Object.values(frequency)
        );


    if (maxFrequency === 1) {
        return [];
    }


    return Object.keys(frequency)
        .filter(
            value =>
                frequency[value] === maxFrequency
        )
        .map(Number);
}


/**
 * Minimum value
 */
function getMinimum(values) {

    return Math.min(...values);
}


/**
 * Maximum value
 */
function getMaximum(values) {

    return Math.max(...values);
}


/**
 * Calculate range
 */
function getRange(values) {

    return (
        getMaximum(values) -
        getMinimum(values)
    );
}


/* =========================
   Variance
========================= */

/**
 * Calculate population variance
 */
function getPopulationVariance(values) {

    if (values.length === 0) {
        return 0;
    }


    const mean =
        getMean(values);


    const squaredDifferences =
        values.map(
            value =>
                Math.pow(
                    value - mean,
                    2
                )
        );


    return (
        getSum(squaredDifferences) /
        values.length
    );
}


/**
 * Calculate sample variance
 */
function getSampleVariance(values) {

    if (values.length < 2) {
        return 0;
    }


    const mean =
        getMean(values);


    const squaredDifferences =
        values.map(
            value =>
                Math.pow(
                    value - mean,
                    2
                )
        );


    return (
        getSum(squaredDifferences) /
        (values.length - 1)
    );
}


/* =========================
   Standard Deviation
========================= */

/**
 * Calculate population standard deviation
 */
function getPopulationStandardDeviation(values) {

    return Math.sqrt(
        getPopulationVariance(values)
    );
}


/**
 * Calculate sample standard deviation
 */
function getSampleStandardDeviation(values) {

    return Math.sqrt(
        getSampleVariance(values)
    );
}


/* =========================
   Complete Statistics
========================= */

/**
 * Calculate complete statistics
 */
function calculateStatistics(
    values,
    type = "population"
) {

    const variance =
        type === "sample"
            ? getSampleVariance(values)
            : getPopulationVariance(values);


    const standardDeviation =
        type === "sample"
            ? getSampleStandardDeviation(values)
            : getPopulationStandardDeviation(values);


    return {

        count:
            getCount(values),

        sum:
            getSum(values),

        mean:
            getMean(values),

        median:
            getMedian(values),

        mode:
            getMode(values),

        minimum:
            getMinimum(values),

        maximum:
            getMaximum(values),

        range:
            getRange(values),

        variance,

        standardDeviation

    };
}


/* =========================
   Dataset Helpers
========================= */

/**
 * Return sorted dataset
 */
function getSortedValues(values) {

    return [...values]
        .sort((a, b) => a - b);
}


/**
 * Return unique values
 */
function getUniqueValues(values) {

    return [...new Set(values)]
        .sort((a, b) => a - b);
}


/* =========================
   Percentile
========================= */

/**
 * Calculate percentile
 *
 * Uses linear interpolation.
 *
 * Example:
 * getPercentile(values, 0.25)
 * returns the 25th percentile.
 *
 * Percentile must be between:
 * 0 and 1.
 */
function getPercentile(
    values,
    percentile
) {

    if (values.length === 0) {
        return 0;
    }


    if (
        percentile < 0 ||
        percentile > 1
    ) {
        return 0;
    }


    const sorted =
        getSortedValues(values);


    const index =
        (sorted.length - 1) *
        percentile;


    const lower =
        Math.floor(index);


    const upper =
        Math.ceil(index);


    if (lower === upper) {
        return sorted[lower];
    }


    const weight =
        index - lower;


    return (
        sorted[lower] +
        (
            sorted[upper] -
            sorted[lower]
        ) * weight
    );
}


/* =========================
   Common Percentiles
========================= */

/**
 * Calculate common percentile values.
 *
 * Returns:
 * - P10
 * - P25
 * - P50
 * - P75
 * - P90
 * - P95
 */
function getPercentileSummary(values) {

    return {

        p10:
            getPercentile(values, 0.10),

        p25:
            getPercentile(values, 0.25),

        p50:
            getPercentile(values, 0.50),

        p75:
            getPercentile(values, 0.75),

        p90:
            getPercentile(values, 0.90),

        p95:
            getPercentile(values, 0.95)

    };
}


/* =========================
   Quartiles
========================= */

/**
 * First quartile
 */
function getQ1(values) {

    return getPercentile(
        values,
        0.25
    );
}


/**
 * Third quartile
 */
function getQ3(values) {

    return getPercentile(
        values,
        0.75
    );
}


/**
 * Interquartile range
 */
function getIQR(values) {

    return (
        getQ3(values) -
        getQ1(values)
    );
}


/* =========================
   Frequency Distribution
========================= */

/**
 * Calculate frequency distribution
 */
function getFrequencyDistribution(values) {

    const frequency = {};


    values.forEach(value => {

        frequency[value] =
            (frequency[value] || 0) + 1;

    });


    return Object.entries(frequency)

        .map(
            ([value, count]) => ({

                value:
                    Number(value),

                frequency:
                    count

            })
        )

        .sort(
            (a, b) =>
                a.value - b.value
        );
}


/* =========================
   Z-Score
========================= */

/**
 * Calculate Z-score for a value.
 *
 * Formula:
 *
 * Z = (X - Mean) / Standard Deviation
 *
 * Uses the supplied standard deviation.
 */
function getZScore(
    value,
    mean,
    standardDeviation
) {

    if (
        !Number.isFinite(value) ||
        !Number.isFinite(mean) ||
        !Number.isFinite(standardDeviation)
    ) {

        return 0;
    }


    /*
     * When every value in the dataset
     * is identical, standard deviation
     * becomes zero.
     *
     * In that case there is no meaningful
     * standardized distance from the mean.
     */
    if (standardDeviation === 0) {

        return 0;
    }


    return (
        (value - mean) /
        standardDeviation
    );
}


/* =========================
   Z-Score Interpretation
========================= */

/**
 * Interpret a Z-score.
 *
 * |Z| < 1
 * → Typical
 *
 * 1 ≤ |Z| < 2
 * → Slightly unusual
 *
 * 2 ≤ |Z| < 3
 * → Unusual
 *
 * |Z| ≥ 3
 * → Highly unusual
 */
function getZScoreInterpretation(
    zScore
) {

    const absoluteZ =
        Math.abs(zScore);


    if (absoluteZ < 1) {

        return "Typical";
    }


    if (absoluteZ < 2) {

        return "Slightly unusual";
    }


    if (absoluteZ < 3) {

        return "Unusual";
    }


    return "Highly unusual";
}


/* =========================
   Z-Score Dataset Analysis
========================= */

/**
 * Calculate Z-scores for every
 * value in a dataset.
 *
 * Returns an array containing:
 *
 * {
 *     value,
 *     zScore,
 *     interpretation
 * }
 */
function getZScoreData(
    values,
    type = "population"
) {

    if (!values.length) {
        return [];
    }


    const mean =
        getMean(values);


    const standardDeviation =
        type === "sample"
            ? getSampleStandardDeviation(values)
            : getPopulationStandardDeviation(values);


    return values.map(value => {

        const zScore =
            getZScore(
                value,
                mean,
                standardDeviation
            );


        return {

            value,

            zScore,

            interpretation:
                getZScoreInterpretation(
                    zScore
                )

        };

    });
}


/* =========================
   Z-Score Summary
========================= */

/**
 * Calculate summary information
 * for the dataset Z-scores.
 */
function getZScoreSummary(
    values,
    type = "population"
) {

    const zScoreData =
        getZScoreData(
            values,
            type
        );


    if (!zScoreData.length) {

        return {

            lowest: 0,

            highest: 0,

            mean: 0

        };
    }


    const scores =
        zScoreData.map(
            item => item.zScore
        );


    const lowest =
        Math.min(...scores);


    const highest =
        Math.max(...scores);


    const mean =
        getMean(scores);


    return {

        lowest,

        highest,

        mean

    };
}