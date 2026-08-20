/**
 * StatKit
 * Local Storage Manager
 *
 * Handles:
 * - Saving calculation history
 * - Loading calculation history
 * - Deleting individual records
 * - Clearing all history
 *
 * Data is stored locally in the browser.
 */


/* =========================
   Configuration
========================= */

const STORAGE_KEY =
    "statkit_history";

const MAX_HISTORY_ITEMS =
    20;


/* =========================
   Get History
========================= */

/**
 * Get saved calculation history.
 *
 * Returns an empty array if:
 * - No history exists
 * - Stored data is invalid
 * - LocalStorage access fails
 */
function getHistory() {

    try {

        const storedHistory =
            localStorage.getItem(
                STORAGE_KEY
            );


        if (!storedHistory) {
            return [];
        }


        const history =
            JSON.parse(
                storedHistory
            );


        return Array.isArray(history)
            ? history
            : [];

    } catch (error) {

        console.error(
            "Failed to load StatKit history:",
            error
        );

        return [];
    }
}


/* =========================
   Save History
========================= */

/**
 * Save a calculation to history.
 *
 * Keeps only the latest 20 calculations.
 */
function saveHistory(
    values,
    results,
    type
) {

    try {

        const history =
            getHistory();


        const record = {

            id:
                Date.now(),

            values:
                [...values],

            results,

            type,

            createdAt:
                new Date().toISOString()

        };


        history.unshift(record);


        const limitedHistory =
            history.slice(
                0,
                MAX_HISTORY_ITEMS
            );


        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(
                limitedHistory
            )
        );


    } catch (error) {

        console.error(
            "Failed to save StatKit history:",
            error
        );
    }
}


/* =========================
   Delete History
========================= */

/**
 * Delete a single history record.
 */
function deleteHistory(id) {

    try {

        const history =
            getHistory();


        const updatedHistory =
            history.filter(
                item =>
                    item.id !== id
            );


        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(
                updatedHistory
            )
        );


    } catch (error) {

        console.error(
            "Failed to delete StatKit history:",
            error
        );
    }
}


/* =========================
   Clear History
========================= */

/**
 * Remove all saved calculation history.
 */
function clearHistory() {

    try {

        localStorage.removeItem(
            STORAGE_KEY
        );

    } catch (error) {

        console.error(
            "Failed to clear StatKit history:",
            error
        );
    }
}