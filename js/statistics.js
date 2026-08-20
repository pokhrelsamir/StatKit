/**
 * StatKit
 * Statistical Calculation Engine
 *
 * Provides functions for:
 * - Count
 * - Sum
 * - Mean
 * - Median
 * - Mode
 * - Minimum
 * - Maximum
 * - Range
 * - Population Variance
 * - Sample Variance
 * - Standard Deviation
 * - Sorted Values
 * - Unique Values
 * - Percentiles
 * - Quartiles
 * - IQR
 * - Frequency Distribution
 * - Z-Scores
 * - Z-Score Interpretation
 * - Z-Score Summary
 */


/* =========================
   Basic Statistics
========================= */

/**
 * Count values.
 */
function getCount(values) {
    return values.length;
}


/**
 * Calculate sum.
 */
function getSum(values) {

    return values.reduce(
        (total, value) => total + value,
        0
    );
}


/**
 * Calculate arithmetic mean.
 */
function getMean(values) {

    if (!values.length) {
        return 0;
    }

    return getSum(values) / values.length;
}


/**
 * Calculate median.
 */
function getMedian(values) {

    if (!values.length) {
        return 0;
    }

    const sorted = getSortedValues(values);

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
 * Calculate mode.
 *
 * Returns all modes when multiple values
 * have the highest frequency.
 */
function getMode(values) {

    if (!values.length) {
        return [];
    }

    const frequency = new Map();

    values.forEach(value => {

        frequency.set(
            value,
            (frequency.get(value) || 0) + 1
        );

    });

    const maxFrequency =
        Math.max(...frequency.values());

    if (maxFrequency === 1) {
        return [];
    }

    return [...frequency.entries()]
        .filter(
            ([, count]) =>
                count === maxFrequency
        )
        .map(([value]) => value)
        .sort((a, b) => a - b);
}


/**
 * Minimum value.
 */
function getMinimum(values) {

    if (!values.length) {
        return 0;
    }

    return Math.min(...values);
}


/**
 * Maximum value.
 */
function getMaximum(values) {

    if (!values.length) {
        return 0;
    }

    return Math.max(...values);
}


/**
 * Calculate range.
 */
function getRange(values) {

    if (!values.length) {
        return 0;
    }

    return (
        getMaximum(values) -
        getMinimum(values)
    );
}


/* =========================
   Variance
========================= */

/**
 * Calculate population variance.
 */
function getPopulationVariance(values) {

    if (!values.length) {
        return 0;
    }

    const mean = getMean(values);

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
 * Calculate sample variance.
 */
function getSampleVariance(values) {

    if (values.length < 2) {
        return 0;
    }

    const mean = getMean(values);

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
 * Population standard deviation.
 */
function getPopulationStandardDeviation(values) {

    return Math.sqrt(
        getPopulationVariance(values)
    );
}


/**
 * Sample standard deviation.
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
 * Calculate complete statistical results.
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
 * Return sorted dataset without
 * modifying the original array.
 */
function getSortedValues(values) {

    return [...values]
        .sort((a, b) => a - b);
}


/**
 * Return sorted unique values.
 */
function getUniqueValues(values) {

    return [...new Set(values)]
        .sort((a, b) => a - b);
}


/* =========================
   Percentile
========================= */

/**
 * Calculate percentile using
 * linear interpolation.
 *
 * percentile must be between 0 and 1.
 */
function getPercentile(
    values,
    percentile
) {

    if (!values.length) {
        return 0;
    }

    if (
        !Number.isFinite(percentile) ||
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
 * First quartile.
 */
function getQ1(values) {

    return getPercentile(
        values,
        0.25
    );
}


/**
 * Third quartile.
 */
function getQ3(values) {

    return getPercentile(
        values,
        0.75
    );
}


/**
 * Interquartile range.
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
 * Calculate frequency distribution.
 */
function getFrequencyDistribution(values) {

    const frequency = new Map();

    values.forEach(value => {

        frequency.set(
            value,
            (frequency.get(value) || 0) + 1
        );

    });

    return [...frequency.entries()]
        .map(([value, count]) => ({

            value,

            frequency: count

        }))
        .sort(
            (a, b) =>
                a.value - b.value
        );
}


/* =========================
   Z-Score
========================= */

/**
 * Calculate Z-score for one value.
 *
 * Z = (X - Mean) / Standard Deviation
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
 */
function getZScoreInterpretation(zScore) {

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

    return values.map(
        (value, index) => {

            const zScore =
                getZScore(
                    value,
                    mean,
                    standardDeviation
                );

            return {

                index:
                    index + 1,

                value,

                zScore,

                interpretation:
                    getZScoreInterpretation(
                        zScore
                    )

            };

        }
    );
}


/* =========================
   Z-Score Summary
========================= */

/**
 * Calculate summary information
 * for dataset Z-scores.
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

    return {

        lowest:
            Math.min(...scores),

        highest:
            Math.max(...scores),

        mean:
            getMean(scores)

    };
}