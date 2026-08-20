Skip to main content
Ctrl+K
Ctrl+J


# 📊 StatKit

A powerful, lightweight, browser-based statistical analysis toolkit for exploring numerical datasets with essential descriptive statistics, distribution analysis, percentiles, Z-scores, outlier detection, and visualizations.
<image-card alt="StatKit Banner" src="screenshots/banner.png" ></image-card>


## 🌐 Live Demo

## 🚀 **Live Demo:** https://yourusername.github.io/StatKit/

## 📸 Screenshots

### 🏠 Main Interface

## <image-card alt="StatKit Main Interface" src="screenshots/main-interface.png" ></image-card>

### 📊 Statistical Results

## <image-card alt="Statistical Results" src="screenshots/statistical-results.png" ></image-card>

### 📈 Dataset Analysis

## <image-card alt="Dataset Analysis" src="screenshots/dataset-analysis.png" ></image-card>

### 📦 Box Plot & Outlier Detection

## <image-card alt="Box Plot" src="screenshots/box-plot.png" ></image-card>

### 🎯 Z-Score Analysis

## <image-card alt="Z-Score Analysis" src="screenshots/zscore-analysis.png" ></image-card>

### 📜 Calculation History

## <image-card alt="Calculation History" src="screenshots/calculation-history.png" ></image-card>

## ✨ Features

StatKit provides a comprehensive collection of statistical tools for analyzing numerical datasets directly in the browser.

### 📊 Descriptive Statistics

Calculate essential statistical measures including:

Count
Sum
Mean
Median
Mode
Minimum
Maximum
Range
Variance
Standard Deviation
### 📐 Population & Sample Statistics

Choose between:

**Population variance**
**Sample variance**
StatKit automatically calculates the corresponding standard deviation based on the selected variance type.
### 🔢 Dataset Analysis

Explore your dataset with:

Sorted values
Unique value count
First quartile (Q1)
Third quartile (Q3)
Interquartile range (IQR)
This makes it easy to identify repeated values and understand the distribution of the dataset.
📈 Frequency Chart
A visual frequency chart provides a quick overview of how frequently each value appears.
The chart is generated dynamically from the entered dataset.
📦 Five-Number Summary
StatKit calculates the complete five-number summary:
Minimum
Q1
Median
Q3
Maximum
The summary is also displayed using a visual distribution scale.
📊 Percentile Analysis
Calculate important percentile values:
P10
P25
P50
P75
P90
P95
Percentiles use linear interpolation for numerical datasets.
🎯 Z-Score Analysis
Calculate the standardized distance of each value from the dataset mean.
The Z-score is calculated using:
Z = (X - Mean) / Standard Deviation
StatKit provides:
Lowest Z-score
Highest Z-score
Mean Z-score
Individual Z-scores
Z-score interpretation
Example interpretations include:
Typical
Slightly unusual
Unusual
Highly unusual
🚨 Outlier Detection
Detect unusual observations using the IQR method.
StatKit calculates:
Lower Bound = Q1 - 1.5 × IQR
Upper Bound = Q3 + 1.5 × IQR
The application displays:
Lower bound
Upper bound
Outlier count
Detected outlier values
Outlier status
📦 Box Plot
StatKit dynamically generates a box plot based on the dataset.
The visualization represents:
Minimum ── Q1 ┃ Median ┃ Q3 ── Maximum
Outliers are displayed separately on the plot.
The box plot also handles datasets where all values are identical.
💾 Calculation History
Recent calculations are automatically stored in the browser using localStorage.
History includes:
Dataset preview
Variance type
Calculation timestamp
Stored calculation results
Users can:
View previous calculations
Delete individual records
Clear the complete history
StatKit keeps the latest 20 calculations.
⌨️ Keyboard Shortcut
Quickly calculate a dataset using:
Ctrl + Enter
while focused on the dataset input field.
🧹 Easy Dataset Management
Quickly:
Enter a new dataset
Calculate results
Clear the current dataset
Clear calculation history
📱 Responsive Interface
StatKit is designed to work across:
Desktop
Laptop
Tablet
Mobile devices
🧮 Supported Input Formats
StatKit accepts numbers separated by:
Commas
10, 20, 30, 40, 50
Spaces
10 20 30 40 50
New Lines
10
20
30
40
50
Mixed Separators
10, 20
30 40
50, 60
🧪 Example Dataset
Try the following dataset:
12, 15, 18, 18, 20, 22, 25, 25, 25, 30, 32, 35, 40, 42, 100
StatKit can analyze this dataset and display:
Descriptive statistics
Mode
Quartiles
IQR
Percentiles
Frequency distribution
Frequency chart
Z-scores
Outliers
Box plot
Five-number summary
The value 100 also provides a useful example for testing outlier detection.
🔍 Example Results
For:
1, 2, 3, 4, 5
StatKit produces:
StatisticResultCount5Sum15Mean3Median3ModeNo modeMinimum1Maximum5Range4Population Variance2Population Std. Dev.1.4142Q12Q34IQR2
🛠️ Technology Stack
TechnologyPurposeHTML5Application structureCSS3UI design and responsive layoutJavaScriptStatistical calculations and application logicLocalStorageCalculation historyBrowser APIsClient-side interaction
StatKit is built using vanilla HTML, CSS, and JavaScript without requiring a backend.
📂 Project Structure
StatKit/
│
├── index.html
├── README.md
├── LICENSE
│
├── css/
│ └── style.css
│
├── js/
│ ├── app.js
│ ├── statistics.js
│ └── storage.js
│
└── screenshots/
    ├── banner.png
    ├── main-interface.png
    ├── statistical-results.png
    ├── dataset-analysis.png
    ├── box-plot.png
    ├── zscore-analysis.png
    └── calculation-history.png
🚀 Getting Started

Clone the Repository
git clone https://github.com/SamirPokhrel/StatKit.git
Navigate to the Project
cd StatKit
Open the Application
Open:
index.html
in your preferred modern web browser.
No backend server or package installation is required.
💻 Usage
Step 1 — Enter Dataset
Enter numerical values into the dataset field.
Example:
12, 18, 24, 18, 30, 42, 18
Step 2 — Select Variance Type
Choose:
Population
or:
Sample
Step 3 — Calculate
Click:
Calculate
StatKit will generate the complete analysis.
Step 4 — Explore Results
Review:
Statistics
Dataset analysis
Frequency distribution
Percentiles
Z-scores
Outliers
Box plot
Five-number summary
Step 5 — Review History
Previous calculations are automatically saved locally and can be accessed from the Calculation History section.
⚠️ Input Validation
StatKit validates the entered dataset before performing calculations.
Empty Dataset
Please enter at least one number.
Invalid Values
Please enter valid numbers only.
Only finite numerical values are accepted.
🔐 Privacy
StatKit performs statistical calculations directly in the browser.
Your dataset does not need to be uploaded to an external server.
Calculation history is stored locally using the browser's:
localStorage
No database or external API is required.
Avoid entering confidential or sensitive information into any browser-based tool unless you understand the data-handling environment of the device and browser you're using.
⚡ Performance
StatKit is designed to remain lightweight and responsive.
Key characteristics
Client-side calculations
No backend dependency
No database
No external API
Minimal dependencies
Fast statistical processing
Lightweight architecture
🌍 Browser Compatibility
StatKit works with modern browsers supporting standard HTML5, CSS3, and JavaScript features.
Recommended browsers:
Google Chrome
Mozilla Firefox
Microsoft Edge
Safari
Brave
Opera
🧠 Statistical Methods
StatKit implements several standard statistical techniques.
Mean
Mean = Σx / n
Population Variance
σ² = Σ(x - μ)² / N
Sample Variance
s² = Σ(x - x̄)² / (n - 1)
Standard Deviation
SD = √Variance
Range
Range = Maximum - Minimum
Interquartile Range
IQR = Q3 - Q1
Outlier Bounds
Lower Bound = Q1 - 1.5 × IQR
Upper Bound = Q3 + 1.5 × IQR
Z-Score
Z = (X - Mean) / Standard Deviation
🎯 Project Goals
StatKit was created to provide a simple and practical environment for numerical dataset analysis.
The primary goals are:
Make common statistical calculations easily accessible.
Provide clear and understandable statistical results.
Visualize important dataset characteristics.
Help students understand statistical concepts.
Provide a lightweight browser-based alternative to larger statistical tools.
Demonstrate statistical programming using vanilla JavaScript.
🔮 Future Improvements
Potential future improvements include:
 Data import from CSV files
 Excel file support
 Data export
 Download analysis report
 PDF report generation
 Histogram
 Scatter plot
 Pie chart
 Line chart
 Correlation analysis
 Covariance
 Skewness
 Kurtosis
 Mean absolute deviation
 Standard error
 Confidence intervals
 Additional percentile options
 Dataset comparison
 Dark/light theme
 Advanced statistical distributions
🤝 Contributing
Contributions are welcome.
Fork the Repository
Create your own fork of StatKit.
Create a Feature Branch
git checkout -b feature/your-feature
Make Your Changes
Implement and test your changes.
Commit
git add .
git commit -m "Add: your feature"
Push
git push origin feature/your-feature
Open a Pull Request
Create a pull request with a clear description of your changes.
🐛 Bug Reports
If you discover a bug, please open an issue and provide:
Description of the problem
Steps to reproduce
Expected behavior
Actual behavior
Browser and version
Screenshot, if applicable
Example dataset, if relevant
💡 Feature Requests
Feature suggestions are welcome.
When requesting a feature, consider explaining:
What the feature does
Why it would be useful
How it should behave
Example input/output where applicable
📜 License
This project is licensed under the MIT License.
See the LICENSE file for complete license information.
👨‍💻 Author
Samir Pokhrel
B.Sc. CSIT Student & Developer
GitHub:
https://github.com/SamirPokhrel
⭐ Support
If you find StatKit useful:
⭐ Star the repository
🍴 Fork the project
🐛 Report bugs
💡 Suggest features
🤝 Contribute improvements
Every contribution and star is appreciated!
provide me README.d file adding all these in a specific format like heading,subheadings and otehr section

Worked for 2m 53s
Your README.md has been created successfully at:

/home/workdir/artifacts/README.md

It includes all the content you provided, organized with:

Proper Markdown headings (#, ##, ###)
Subheadings for each feature section
Tables for example results, technology stack, and input validation
Code blocks for formulas, commands, and examples
Horizontal rules (---) for clear section separation
Checklists for future improvements
Clean lists, bold text, and emoji section markers for readability
You can download it from the artifacts folder and use it directly in your StatKit repository.

/home/workdir/artifacts/README.md
where is this ?


Worked for 4s
The file is located in the sandbox environment (a remote computer I use to create files for you), not on your local machine.

Full path:

/home/workdir/artifacts/README.md
How to get it:
In this chat, look for the Artifacts / Files section (usually on the side or below the response).
You should see README.md listed there.
Click it to preview or download it to your computer.
If you don’t see it, try refreshing the page or scrolling to the files/attachments area in the conversation.




README.md
README.md
# 📊 StatKit

> A powerful, lightweight, browser-based statistical analysis toolkit for exploring numerical datasets with essential descriptive statistics, distribution analysis, percentiles, Z-scores, outlier detection, and visualizations.

![StatKit Banner](screenshots/banner.png)

---

## 🌐 Live Demo

🚀 **Live Demo:** [https://yourusername.github.io/StatKit/](https://yourusername.github.io/StatKit/)

---

## 📸 Screenshots

### 🏠 Main Interface

![StatKit Main Interface](screenshots/main-interface.png)

### 📊 Statistical Results

![Statistical Results](screenshots/statistical-results.png)

### 📈 Dataset Analysis

![Dataset Analysis](screenshots/dataset-analysis.png)

### 📦 Box Plot & Outlier Detection

![Box Plot](screenshots/box-plot.png)

### 🎯 Z-Score Analysis

![Z-Score Analysis](screenshots/zscore-analysis.png)

### 📜 Calculation History

![Calculation History](screenshots/calculation-history.png)

---

## ✨ Features

StatKit provides a comprehensive collection of statistical tools for analyzing numerical datasets directly in the browser.

### 📊 Descriptive Statistics

Calculate essential statistical measures including:

- Count
- Sum
- Mean
- Median
- Mode
- Minimum
- Maximum
- Range
- Variance
- Standard Deviation

### 📐 Population & Sample Statistics

Choose between:

- **Population variance**
- **Sample variance**

StatKit automatically calculates the corresponding standard deviation based on the selected variance type.

### 🔢 Dataset Analysis

Explore your dataset with:

- Sorted values
- Unique value count
- First quartile (Q1)
- Third quartile (Q3)
- Interquartile range (IQR)

This makes it easy to identify repeated values and understand the distribution of the dataset.

### 📈 Frequency Chart

A visual frequency chart provides a quick overview of how frequently each value appears.

The chart is generated dynamically from the entered dataset.

### 📦 Five-Number Summary

StatKit calculates the complete five-number summary:

- Minimum
- Q1
- Median
- Q3
- Maximum

The summary is also displayed using a visual distribution scale.

### 📊 Percentile Analysis

Calculate important percentile values:

- P10
- P25
- P50
- P75
- P90
- P95

Percentiles use linear interpolation for numerical datasets.

### 🎯 Z-Score Analysis

Calculate the standardized distance of each value from the dataset mean.

The Z-score is calculated using:

```
Z = (X - Mean) / Standard Deviation
```

StatKit provides:

- Lowest Z-score
- Highest Z-score
- Mean Z-score
- Individual Z-scores
- Z-score interpretation

Example interpretations include:

- Typical
- Slightly unusual
- Unusual
- Highly unusual

### 🚨 Outlier Detection

Detect unusual observations using the IQR method.

StatKit calculates:

```
Lower Bound = Q1 - 1.5 × IQR
Upper Bound = Q3 + 1.5 × IQR
```

The application displays:

- Lower bound
- Upper bound
- Outlier count
- Detected outlier values
- Outlier status

### 📦 Box Plot

StatKit dynamically generates a box plot based on the dataset.

The visualization represents:

```
Minimum ── Q1 ┃ Median ┃ Q3 ── Maximum
```

Outliers are displayed separately on the plot.

The box plot also handles datasets where all values are identical.

### 💾 Calculation History

Recent calculations are automatically stored in the browser using `localStorage`.

History includes:

- Dataset preview
- Variance type
- Calculation timestamp
- Stored calculation results

Users can:

- View previous calculations
- Delete individual records
- Clear the complete history

StatKit keeps the latest **20** calculations.

### ⌨️ Keyboard Shortcut

Quickly calculate a dataset using:

**Ctrl + Enter**

while focused on the dataset input field.

### 🧹 Easy Dataset Management

Quickly:

- Enter a new dataset
- Calculate results
- Clear the current dataset
- Clear calculation history

### 📱 Responsive Interface

StatKit is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## 🧮 Supported Input Formats

StatKit accepts numbers separated by:

**Commas**

```
10, 20, 30, 40, 50
```

**Spaces**

```
10 20 30 40 50
```

**New Lines**

```
10
20
30
40
50
```

**Mixed Separators**

```
10, 20
30 40
50, 60
```

---

## 🧪 Example Dataset

Try the following dataset:

```
12, 15, 18, 18, 20, 22, 25, 25, 25, 30, 32, 35, 40, 42, 100
```

StatKit can analyze this dataset and display:

- Descriptive statistics
- Mode
- Quartiles
- IQR
- Percentiles
- Frequency distribution
- Frequency chart
- Z-scores
- Outliers
- Box plot
- Five-number summary

The value **100** also provides a useful example for testing outlier detection.

---

## 🔍 Example Results

For the dataset:

```
1, 2, 3, 4, 5
```

StatKit produces:

| Statistic              | Result   |
|------------------------|----------|
| Count                  | 5        |
| Sum                    | 15       |
| Mean                   | 3        |
| Median                 | 3        |
| Mode                   | No mode  |
| Minimum                | 1        |
| Maximum                | 5        |
| Range                  | 4        |
| Population Variance    | 2        |
| Population Std. Dev.   | 1.4142   |
| Q1                     | 2        |
| Q3                     | 4        |
| IQR                    | 2        |

---

## 🛠️ Technology Stack

| Technology     | Purpose                                      |
|----------------|----------------------------------------------|
| HTML5          | Application structure                        |
| CSS3           | UI design and responsive layout              |
| JavaScript     | Statistical calculations and application logic |
| LocalStorage   | Calculation history                          |
| Browser APIs   | Client-side interaction                      |

StatKit is built using **vanilla HTML, CSS, and JavaScript** without requiring a backend.

---

## 📂 Project Structure

```
StatKit/
│
├── index.html
├── README.md
├── LICENSE
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── statistics.js
│   └── storage.js
│
└── screenshots/
    ├── banner.png
    ├── main-interface.png
    ├── statistical-results.png
    ├── dataset-analysis.png
    ├── box-plot.png
    ├── zscore-analysis.png
    └── calculation-history.png
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SamirPokhrel/StatKit.git
```

### 2. Navigate to the Project

```bash
cd StatKit
```

### 3. Open the Application

Open `index.html` in your preferred modern web browser.

No backend server or package installation is required.

---

## 💻 Usage

### Step 1 — Enter Dataset

Enter numerical values into the dataset field.

**Example:**

```
12, 18, 24, 18, 30, 42, 18
```

### Step 2 — Select Variance Type

Choose:

- **Population**
- or
- **Sample**

### Step 3 — Calculate

Click **Calculate**.

StatKit will generate the complete analysis.

### Step 4 — Explore Results

Review:

- Statistics
- Dataset analysis
- Frequency distribution
- Percentiles
- Z-scores
- Outliers
- Box plot
- Five-number summary

### Step 5 — Review History

Previous calculations are automatically saved locally and can be accessed from the **Calculation History** section.

---

## ⚠️ Input Validation

StatKit validates the entered dataset before performing calculations.

| Case              | Message                              |
|-------------------|--------------------------------------|
| Empty Dataset     | Please enter at least one number.    |
| Invalid Values    | Please enter valid numbers only.     |

Only finite numerical values are accepted.

---

## 🔐 Privacy

StatKit performs statistical calculations directly in the browser.

- Your dataset does **not** need to be uploaded to an external server.
- Calculation history is stored locally using the browser’s `localStorage`.
- No database or external API is required.

> Avoid entering confidential or sensitive information into any browser-based tool unless you understand the data-handling environment of the device and browser you're using.

---

## ⚡ Performance

StatKit is designed to remain lightweight and responsive.

**Key characteristics:**

- Client-side calculations
- No backend dependency
- No database
- No external API
- Minimal dependencies
- Fast statistical processing
- Lightweight architecture

---

## 🌍 Browser Compatibility

StatKit works with modern browsers supporting standard HTML5, CSS3, and JavaScript features.

**Recommended browsers:**

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Brave
- Opera

---

## 🧠 Statistical Methods

StatKit implements several standard statistical techniques.

### Mean

```
Mean = Σx / n
```

### Population Variance

```
σ² = Σ(x - μ)² / N
```

### Sample Variance

```
s² = Σ(x - x̄)² / (n - 1)
```

### Standard Deviation

```
SD = √Variance
```

### Range

```
Range = Maximum - Minimum
```

### Interquartile Range

```
IQR = Q3 - Q1
```

### Outlier Bounds

```
Lower Bound = Q1 - 1.5 × IQR
Upper Bound = Q3 + 1.5 × IQR
```

### Z-Score

```
Z = (X - Mean) / Standard Deviation
```

---

## 🎯 Project Goals

StatKit was created to provide a simple and practical environment for numerical dataset analysis.

The primary goals are:

- Make common statistical calculations easily accessible.
- Provide clear and understandable statistical results.
- Visualize important dataset characteristics.
- Help students understand statistical concepts.
- Provide a lightweight browser-based alternative to larger statistical tools.
- Demonstrate statistical programming using vanilla JavaScript.

---

## 🔮 Future Improvements

Potential future improvements include:

- [ ] Data import from CSV files
- [ ] Excel file support
- [ ] Data export
- [ ] Download analysis report
- [ ] PDF report generation
- [ ] Histogram
- [ ] Scatter plot
- [ ] Pie chart
- [ ] Line chart
- [ ] Correlation analysis
- [ ] Covariance
- [ ] Skewness
- [ ] Kurtosis
- [ ] Mean absolute deviation
- [ ] Standard error
- [ ] Confidence intervals
- [ ] Additional percentile options
- [ ] Dataset comparison
- [ ] Dark/light theme
- [ ] Advanced statistical distributions

---

## 🤝 Contributing

Contributions are welcome.

1. **Fork the Repository**  
   Create your own fork of StatKit.

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make Your Changes**  
   Implement and test your changes.

4. **Commit**

   ```bash
   git add .
   git commit -m "Add: your feature"
   ```

5. **Push**

   ```bash
   git push origin feature/your-feature
   ```

6. **Open a Pull Request**  
   Create a pull request with a clear description of your changes.

---

## 🐛 Bug Reports

If you discover a bug, please open an issue and provide:

- Description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and version
- Screenshot, if applicable
- Example dataset, if relevant

---

## 💡 Feature Requests

Feature suggestions are welcome.

When requesting a feature, consider explaining:

- What the feature does
- Why it would be useful
- How it should behave
- Example input/output where applicable

---

## 📜 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for complete license information.

---

## 👨‍💻 Author

**Samir Pokhrel**  
B.Sc. CSIT Student & Developer

GitHub: [https://github.com/SamirPokhrel](https://github.com/SamirPokhrel)

---

## ⭐ Support

If you find StatKit useful:

- ⭐ Star the repository
- 🍴 Fork the project
- 🐛 Report bugs
- 💡 Suggest features
- 🤝 Contribute improvements

Every contribution and star is appreciated!
StatKit: Browser Statistical Analysis Toolkit - Grok