# 🏇 The First Principles Derby

An interactive, 2D cartoon-style derby web app designed to let trainees discover by direct observation why bolting brute-force technology onto legacy processes fails compared to **First Principles**.

---

## 🎯 Pedagogical Concept

- **The Legacy Trap:** Upgrading a legacy biological frame (a horse) with heavy, rigid hardware (a **$500k V8 Turbo Engine** or **$400k Cyber Harness**) produces magnificent exhaust flames and crackling lightning, but degrades net speed due to skeletal compression and turf drag.
- **Biological & Tactical Improvement:** Equipping an **Agile Coach ($250k)** or **Powerbar Bio-Fuel ($200k)** achieves superior cadence and smooth terrain navigation.
- **First Principles Breakthrough:** Re-thinking the challenge from the ground up by deploying an **Agile Cheetah ($50k)** outperforms all combinations at a fraction of the cost.

---

## 🏎️ Deterministic 17-Combination Finish-Time Hierarchy

| Rank | Configuration | Engine ($500k) | Harness ($400k) | Coach ($250k) | Food ($200k) | Animal | Spend | Target Time | Observed Physics Behavior |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **1** | **Cheetah** | - | - | - | - | **Cheetah** | **$50k** | **~3.40s** | Glides effortlessly over all terrain |
| **2** | **Coach Only** | - | - | ON | - | Horse | $250k | **~4.70s** | Unburdened horse + smooth route around mounds |
| **3** | **Food Only** | - | - | - | ON | Horse | $200k | **~5.05s** | High bio-cadence + natural stride |
| **4** | **Coach + Food** | - | - | ON | ON | Horse | $450k | **~5.30s** | Fast cadence + precision steering |
| **5** | **Coach + Harness + Food** | - | ON | ON | ON | Horse | $850k | **~5.65s** | Coach steers smoothly; Food offsets Harness rigidity |
| **6** | **Coach + Harness** | - | ON | ON | - | Horse | $650k | **~5.95s** | Smooth route, but cyber straps restrict stride |
| **7** | **Harness + Food** | - | ON | - | ON | Horse | $600k | **~6.30s** | Electric thrust, but hits mounds with rigid straps |
| **8** | **Standard Horse** | - | - | - | - | Horse | $0 | **~6.55s** | Baseline biological pace |
| **9** | **Harness Only** | - | ON | - | - | Horse | $400k | **~6.80s** | Cyber straps restrict natural skeletal flexion |
| **10** | **All Equipped (4 Items)** | ON | ON | ON | ON | Horse | $1.35M | **~7.10s** | Massive flame show, weighed down by hardware |
| **11** | **Engine + Food + Coach** | ON | - | ON | ON | Horse | $950k | **~7.45s** | Coach skips mounds, but Engine strains frame |
| **12** | **Engine + Harness + Coach** | ON | ON | ON | - | Horse | $1.15M | **~7.85s** | Coach skips mounds, but heavy dual hardware load |
| **13** | **Engine + Coach** | ON | - | ON | - | Horse | $750k | **~8.20s** | Smooth line, heavy V8 structural drag |
| **14** | **Engine + Food** | ON | - | - | ON | Horse | $700k | **~8.60s** | No route guidance + heavy V8 hits every mound |
| **15** | **Engine + Harness + Food** | ON | ON | - | ON | Horse | $1.10M | **~8.95s** | Severe structural overload on uneven turf |
| **16** | **Engine + Harness** | ON | ON | - | - | Horse | $900k | **~9.35s** | Maximum rigid hardware load + impacts mounds |
| **17** | **Engine Only** | ON | - | - | - | Horse | $500k | **~9.80s** | Loudest flames, slowest finish |

* **Rival #1 (Lane 2):** Finishes at ~5.40s.
* **Rival #2 (Lane 3):** Finishes at ~6.20s.

---

## 🛠️ Automated Evaluation Suite

To run the programmatic validation suite across DOM invariants, copy sanitization, and the 17-combo matrix:

```bash
node eval_test.js
```
