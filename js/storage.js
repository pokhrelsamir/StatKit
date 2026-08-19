/**
 * StatKit
 * Local Storage Manager
 */

const STORAGE_KEY = "statkit_history";

/**
 * Get saved calculation history
 */
function getHistory() {
    try {
        const history = localStorage.getItem(STORAGE_KEY);

        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error("Failed to load history:", error);
        return [];
    }
}

/**
 * Save a calculation
 */
function saveHistory(values, results, type) {
    const history = getHistory();

    const record = {
        id: Date.now(),
        values,
        results,
        type,
        createdAt: new Date().toISOString()
    };

    history.unshift(record);

    // Keep latest 20 calculations
    const limitedHistory = history.slice(0, 20);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(limitedHistory)
    );
}

/**
 * Delete a calculation
 */
function deleteHistory(id) {
    const history = getHistory();

    const updatedHistory = history.filter(
        item => item.id !== id
    );

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedHistory)
    );
}

/**
 * Clear all history
 */
function clearHistory() {
    localStorage.removeItem(STORAGE_KEY);
}