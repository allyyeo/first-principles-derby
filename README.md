# 🏇 The First Principles Derby

An interactive, 2D cartoon-style derby web app designed to let trainees discover by direct observation why bolting brute-force technology onto legacy processes fails compared to **First Principles**.

---

## 🎯 Pedagogical Principle: The Legacy Optimization Trap

- **The Impossible Race:** No matter how much money is spent optimizing the legacy biological horse—even equipping the fastest biological/tactical upgrades (**Agile Coach** or **Powerbar Bio-Fuel**)—the horse **still loses to the rivals by at least 0.50 seconds**.
- **The Brute-Force Illusion:** Bolting on heavy hardware (the **$500k V8 Turbo Engine** or **$400k Cyber Harness**) produces magnificent exhaust flames and crackling lightning, but causes severe skeletal compression and loses by 3 to 5 seconds!
- **The First Principles Breakthrough:** **The only way to win the race is to redesign the system from first principles.** Deploying the **Agile Cheetah ($50k)** outperforms all combinations at 3.40s, winning massively by 1.30 seconds ahead of the competition!

---

## 🏎️ Deterministic 17-Combination Finish-Time Hierarchy

* **Rival #1 (Pacesetter #2):** **4.70s**
* **Rival #2 (Challenger #3):** **5.00s**

| Rank | Configuration | Engine ($500k) | Harness ($400k) | Coach ($250k) | Food ($200k) | Animal | Spend | Finish Time | Gap vs Rival #1 | Placement |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | **Cheetah** | - | - | - | - | **Cheetah** | **$50k** | **3.40s** | **-1.30s (Ahead)** | 🥇 **1st Place Winner** |
| **2** | **Coach Only** | - | - | ON | - | Horse | $250k | **5.20s** | **+0.50s (Behind)** | 🥉 3rd Place |
| **3** | **Food Only** | - | - | - | ON | Horse | $200k | **5.45s** | +0.75s (Behind) | 🥉 3rd Place |
| **4** | **Coach + Food** | - | - | ON | ON | Horse | $450k | **5.65s** | +0.95s (Behind) | 🥉 3rd Place |
| **5** | **Coach + Harness + Food** | - | ON | ON | ON | Horse | $850k | **5.90s** | +1.20s (Behind) | 🥉 3rd Place |
| **6** | **Coach + Harness** | - | ON | ON | - | Horse | $650k | **6.15s** | +1.45s (Behind) | 🥉 3rd Place |
| **7** | **Harness + Food** | - | ON | - | ON | Horse | $600k | **6.45s** | +1.75s (Behind) | 🥉 3rd Place |
| **8** | **Standard Horse** | - | - | - | - | Horse | $0 | **6.75s** | +2.05s (Behind) | 🥉 3rd Place |
| **9** | **Harness Only** | - | ON | - | - | Horse | $400k | **7.05s** | +2.35s (Behind) | 🥉 3rd Place |
| **10** | **All Equipped (4 Items)** | ON | ON | ON | ON | Horse | $1.35M | **7.35s** | +2.65s (Behind) | 🥉 3rd Place |
| **11** | **Engine + Food + Coach** | ON | - | ON | ON | Horse | $950k | **7.70s** | +3.00s (Behind) | 🥉 3rd Place |
| **12** | **Engine + Harness + Coach** | ON | ON | ON | - | Horse | $1.15M | **8.10s** | +3.40s (Behind) | 🥉 3rd Place |
| **13** | **Engine + Coach** | ON | - | ON | - | Horse | $750k | **8.45s** | +3.75s (Behind) | 🥉 3rd Place |
| **14** | **Engine + Food** | ON | - | - | ON | Horse | $700k | **8.85s** | +4.15s (Behind) | 🥉 3rd Place |
| **15** | **Engine + Harness + Food** | ON | ON | - | ON | Horse | $1.10M | **9.20s** | +4.50s (Behind) | 🥉 3rd Place |
| **16** | **Engine + Harness** | ON | ON | - | - | Horse | $900k | **9.55s** | +4.85s (Behind) | 🥉 3rd Place |
| **17** | **Engine Only** | ON | - | - | - | Horse | $500k | **9.95s** | +5.25s (Behind) | 🥉 3rd Place |

---

## 🛠️ Automated Evaluation Suite

To run the programmatic validation suite across DOM invariants, copy sanitization, and the 17-combo matrix:

```bash
node eval_test.js
```
