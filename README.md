# 📊 StatKit

> A powerful, lightweight, browser-based statistical analysis toolkit for exploring numerical datasets with essential descriptive statistics, distribution analysis, percentiles, Z-scores, outlier detection, and visualizations.

![StatKit Banner](screenshots/banner.png)

---


## 📸 Screenshots

| Main Interface | Statistical Results | Dataset Analysis |
|:--------------:|:-------------------:|:----------------:|
| ![Main Interface](screenshots/main-interface.png) | ![Statistical Results](screenshots/statistical-results.png) | ![Dataset Analysis](screenshots/dataset-analysis.png) |

| Box Plot | Z-Score Analysis | Calculation History |
|:--------:|:----------------:|:-------------------:|
| ![Box Plot](screenshots/box-plot.png) | ![Z-Score Analysis](screenshots/zscore-analysis.png) | ![Calculation History](screenshots/calculation-history.png) |

---

## ✨ Features

### Descriptive Statistics
- Count, Sum, Mean, Median, Mode
- Minimum, Maximum, Range
- Variance & Standard Deviation

### Population & Sample Statistics
Choose between **Population** or **Sample** variance. Standard deviation is calculated automatically based on the selected type.

### Dataset Analysis
- Sorted values
- Unique value count
- Quartiles (Q1, Q3)
- Interquartile Range (IQR)
- Frequency chart (dynamic)

### Five-Number Summary
Minimum · Q1 · Median · Q3 · Maximum  
Displayed with a visual distribution scale.

### Percentile Analysis
P10 · P25 · P50 · P75 · P90 · P95  
Uses linear interpolation.

### Z-Score Analysis
```
Z = (X − Mean) / Standard Deviation
```
Provides lowest, highest, mean, and individual Z-scores with interpretations (Typical, Slightly unusual, Unusual, Highly unusual).

### Outlier Detection (IQR Method)
```
Lower Bound = Q1 − 1.5 × IQR
Upper Bound = Q3 + 1.5 × IQR
```
Shows lower/upper bounds, outlier count, detected values, and status.

### Box Plot
Dynamically generated visualization:
```
Minimum ── Q1 ┃ Median ┃ Q3 ── Maximum
```
Outliers are shown separately. Handles identical-value datasets.

### Calculation History
- Stored in browser `localStorage`
- Keeps the latest 20 calculations
- View, delete individual records, or clear all

### Other Features
- **Keyboard shortcut:** `Ctrl + Enter` to calculate
- Clear dataset / clear history
- Fully responsive (Desktop, Laptop, Tablet, Mobile)

---

## 🧮 Supported Input Formats

| Format | Example |
|--------|---------|
| Commas | `10, 20, 30, 40, 50` |
| Spaces | `10 20 30 40 50` |
| New lines | `10`<br>`20`<br>`30` |
| Mixed | `10, 20`<br>`30 40`<br>`50, 60` |

---

## 🧪 Example Dataset

```
12, 15, 18, 18, 20, 22, 25, 25, 25, 30, 32, 35, 40, 42, 100
```

Useful for testing descriptive stats, mode, quartiles, IQR, percentiles, frequency chart, Z-scores, outliers, and box plot. The value **100** triggers outlier detection.

### Example Results (`1, 2, 3, 4, 5`)

| Statistic               | Result   |
|-------------------------|----------|
| Count                   | 5        |
| Sum                     | 15       |
| Mean                    | 3        |
| Median                  | 3        |
| Mode                    | No mode  |
| Minimum                 | 1        |
| Maximum                 | 5        |
| Range                   | 4        |
| Population Variance     | 2        |
| Population Std. Dev.    | 1.4142   |
| Q1                      | 2        |
| Q3                      | 4        |
| IQR                     | 2        |

---

## 🛠️ Technology Stack

| Technology   | Purpose                          |
|--------------|----------------------------------|
| HTML5        | Structure                        |
| CSS3         | UI & responsive layout           |
| JavaScript   | Calculations & application logic |
| localStorage | Calculation history              |

Built with **vanilla HTML, CSS, and JavaScript** — no backend required.

---

## 📂 Project Structure

```
StatKit/
├── index.html
├── README.md
├── LICENSE
├── css/
│   └── style.css
└── js/
    ├── app.js
    ├── statistics.js
    └── storage.js
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/pokhrelsamir/StatKit.git

# Navigate to the project
cd StatKit

# Open index.html in any modern browser
```

No backend server or package installation required.

---

## 💻 Usage

1. **Enter Dataset** — Type numbers separated by commas, spaces, or new lines  
   Example: `12, 18, 24, 18, 30, 42, 18`

2. **Select Variance Type** — Population or Sample

3. **Calculate** — Click **Calculate** (or press `Ctrl + Enter`)

4. **Explore Results** — View statistics, quartiles, percentiles, Z-scores, outliers, box plot, and five-number summary

5. **Review History** — Previous calculations are saved automatically

---

## ⚠️ Input Validation

| Case            | Message                             |
|-----------------|-------------------------------------|
| Empty dataset   | Please enter at least one number.   |
| Invalid values  | Please enter valid numbers only.    |

Only finite numerical values are accepted.

---

## 🔐 Privacy

- All calculations run **locally in the browser**
- No data is uploaded to any server
- History is stored only in the browser’s `localStorage`
- No database or external API is used

> Avoid entering confidential information into any browser-based tool.

---

## ⚡ Performance

- Fully client-side
- No backend, database, or external API
- Lightweight and fast

---

## 🌍 Browser Compatibility

Works with modern browsers:

- Chrome · Firefox · Edge · Safari · Brave · Opera

---

## 🧠 Statistical Methods

| Method                  | Formula                              |
|-------------------------|--------------------------------------|
| Mean                    | `Σx / n`                             |
| Population Variance     | `Σ(x − μ)² / N`                      |
| Sample Variance         | `Σ(x − x̄)² / (n − 1)`                |
| Standard Deviation      | `√Variance`                          |
| Range                   | `Maximum − Minimum`                  |
| IQR                     | `Q3 − Q1`                            |
| Lower Bound             | `Q1 − 1.5 × IQR`                     |
| Upper Bound             | `Q3 + 1.5 × IQR`                     |
| Z-Score                 | `(X − Mean) / Standard Deviation`    |

---

## 🎯 Project Goals

- Make common statistical calculations easily accessible
- Provide clear and understandable results
- Visualize important dataset characteristics
- Help students learn statistical concepts
- Offer a lightweight browser-based alternative to heavier tools
- Demonstrate statistical programming with vanilla JavaScript

---

## 🔮 Future Improvements

- [ ] CSV / Excel import & export
- [ ] PDF / downloadable analysis report
- [ ] Histogram, Scatter, Pie, Line charts
- [ ] Correlation, Covariance, Skewness, Kurtosis
- [ ] Mean absolute deviation, Standard error, Confidence intervals
- [ ] Dataset comparison
- [ ] Dark / Light theme
- [ ] Advanced statistical distributions

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch  
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes and test them
4. Commit  
   ```bash
   git add .
   git commit -m "Add: your feature"
   ```
5. Push and open a Pull Request  
   ```bash
   git push origin feature/your-feature
   ```

---

## 🐛 Bug Reports

Please include:

- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and version
- Screenshot (if applicable)
- Example dataset (if relevant)

---

## 💡 Feature Requests

When suggesting a feature, explain:

- What it does
- Why it would be useful
- Expected behavior
- Example input/output (if applicable)

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.

---

# 👨‍💻 Author

<div align="center">

### Samir Pokhrel

**B.Sc. CSIT Student | Web Developer | Networking Enthusiast**

Built using **HTML, CSS, and JavaScript**

<br>

<a href="https://github.com/pokhrelsamir">
  <img src="https://img.shields.io/badge/GitHub-pokhrelsamir-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
<a href="https://www.linkedin.com/in/samirpokhrel/">
  <img src="https://img.shields.io/badge/LinkedIn-Samir%20Pokhrel-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>

</div>

<br>

---


# 🌐 Live Demo

Try the fully deployed SubnetX application:

<div align="center">

<a href="https://pokhrelsamir.github.io/StatKit/">
  <img src="https://img.shields.io/badge/%F0%9F%9A%80%20Open%20StatKit-Live%20Demo-6366f1?style=for-the-badge" alt="Open StatKit Live Demo">
</a>

</div>