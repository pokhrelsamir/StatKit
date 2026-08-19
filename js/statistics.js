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
 */

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
    return values.reduce((total, value) => total + value, 0);
}

/**
 * Calculate arithmetic mean
 */
function getMean(values) {
    if (values.length === 0) return 0;

    return getSum(values) / values.length;
}

/**
 * Calculate median
 */
function getMedian(values) {
    if (values.length === 0) return 0;

    const sorted = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
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
    if (values.length === 0) return [];

    const frequency = {};

    values.forEach(value => {
        frequency[value] = (frequency[value] || 0) + 1;
    });

    const maxFrequency = Math.max(...Object.values(frequency));

    if (maxFrequency === 1) {
        return [];
    }

    return Object.keys(frequency)
        .filter(value => frequency[value] === maxFrequency)
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
    return getMaximum(values) - getMinimum(values);
}

/**
 * Calculate population variance
 */
function getPopulationVariance(values) {
    if (values.length === 0) return 0;

    const mean = getMean(values);

    const squaredDifferences = values.map(
        value => Math.pow(value - mean, 2)
    );

    return getSum(squaredDifferences) / values.length;
}

/**
 * Calculate sample variance
 */
function getSampleVariance(values) {
    if (values.length < 2) return 0;

    const mean = getMean(values);

    const squaredDifferences = values.map(
        value => Math.pow(value - mean, 2)
    );

    return getSum(squaredDifferences) / (values.length - 1);
}

/**
 * Calculate population standard deviation
 */
function getPopulationStandardDeviation(values) {
    return Math.sqrt(getPopulationVariance(values));
}

/**
 * Calculate sample standard deviation
 */
function getSampleStandardDeviation(values) {
    return Math.sqrt(getSampleVariance(values));
}

/**
 * Calculate complete statistics
 */
function calculateStatistics(values, type = "population") {
    const variance =
        type === "sample"
            ? getSampleVariance(values)
            : getPopulationVariance(values);

    const standardDeviation =
        type === "sample"
            ? getSampleStandardDeviation(values)
            : getPopulationStandardDeviation(values);

    return {
        count: getCount(values),
        sum: getSum(values),
        mean: getMean(values),
        median: getMedian(values),
        mode: getMode(values),
        minimum: getMinimum(values),
        maximum: getMaximum(values),
        range: getRange(values),
        variance,
        standardDeviation
    };
}



