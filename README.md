# 🏇 The First Principles Derby

An interactive, 2D cartoon-style derby web app designed to let trainees discover by direct observation why bolting brute-force technology onto legacy processes fails compared to **First Principles**.

---

## 🎯 Pedagogical Principle: The Legacy Optimization Trap

- **The 0.2-Second Glass Ceiling:** Even when you push the legacy horse to its peak biological and tactical limit (**Agile Coach** at 4.90s), you finish in **2nd Place, losing to the winner by an agonizingly close 0.20 seconds**. You can never take 1st place on the legacy frame!
- **The Brute-Force Trap:** Adding heavy hardware (the **$500k V8 Turbo Engine** or **$400k Cyber Harness**) produces magnificent exhaust flames and crackling lightning, but causes severe skeletal compression and drops you straight to 3rd place!
- **The First Principles Breakthrough:** **The only way to win the race is to redesign the system from first principles.** Deploying the **Agile Cheetah ($50k)** runs at **3.40s**, winning 1st place massively by **1.30 seconds** ahead of the competition!

---

## 🏎️ Deterministic 17-Combination Finish-Time Hierarchy

* **Rival #1 (Pacesetter #2):** **4.70s** (1st Place among legacy racers)
* **Rival #2 (Challenger #3):** **5.20s** (3rd Place behind the top horse)

| Rank | Configuration | Engine ($500k) | Harness ($400k) | Coach ($250k) | Food ($200k) | Animal | Spend | Finish Time | Gap vs Rival #1 (4.70s) | Placement |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | **Cheetah** | - | - | - | - | **Cheetah** | **$50k** | **3.40s** | **-1.30s (Ahead)** | 🥇 **1st Place Winner** |
| **2** | **Coach Only** | - | - | ON | - | Horse | $250k | **4.90s** | **+0.20s (Behind)** | 🥈 **2nd Place** |
| **3** | **Food Only** | - | - | - | ON | Horse | $200k | **5.05s** | +0.35s (Behind) | 🥈 **2nd Place** |
| **4** | **Coach + Food** | - | - | ON | ON | Horse | $450k | **5.15s** | +0.45s (Behind) | 🥈 **2nd Place** |
| **5** | **Coach + Harness + Food** | - | ON | ON | ON | Horse | $850k | **5.35s** | +0.65s (Behind) | 🥉 3rd Place |
| **6** | **Coach + Harness** | - | ON | ON | - | Horse | $650k | **5.60s** | +0.90s (Behind) | 🥉 3rd Place |
| **7** | **Harness + Food** | - | ON | - | ON | Horse | $600k | **5.90s** | +1.20s (Behind) | 🥉 3rd Place |
| **8** | **Standard Horse** | - | - | - | - | Horse | $0 | **6.25s** | +1.55s (Behind) | 🥉 3rd Place |
| **9** | **Harness Only** | - | ON | - | - | Horse | $400k | **6.60s** | +1.90s (Behind) | 🥉 3rd Place |
| **10** | **All Equipped (4 Items)** | ON | ON | ON | ON | Horse | $1.35M | **7.00s** | +2.30s (Behind) | 🥉 3rd Place |
| **11** | **Engine + Food + Coach** | ON | - | ON | ON | Horse | $950k | **7.40s** | +2.70s (Behind) | 🥉 3rd Place |
| **12** | **Engine + Harness + Coach** | ON | ON | ON | - | Horse | $1.15M | **7.80s** | +3.10s (Behind) | 🥉 3rd Place |
| **13** | **Engine + Coach** | ON | - | ON | - | Horse | $750k | **8.20s** | +3.50s (Behind) | 🥉 3rd Place |
| **14** | **Engine + Food** | ON | - | - | ON | Horse | $700k | **8.60s** | +3.90s (Behind) | 🥉 3rd Place |
| **15** | **Engine + Harness + Food** | ON | ON | - | ON | Horse | $1.10M | **9.00s** | +4.30s (Behind) | 🥉 3rd Place |
| **16** | **Engine + Harness** | ON | ON | - | - | Horse | $900k | **9.40s** | +4.70s (Behind) | 🥉 3rd Place |
| **17** | **Engine Only** | ON | - | - | - | Horse | $500k | **9.95s** | +5.10s (Behind) | 🥉 3rd Place |

---

## 🛠️ Automated Evaluation Suite

To run the programmatic validation suite across DOM invariants, copy sanitization, and the 17-combo matrix:

```bash
node eval_test.js
```
