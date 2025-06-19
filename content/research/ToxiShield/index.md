---
date: '2025-06-04'
title: 'ToxiShield: Promoting Inclusive  Developer Communication through Real-Time Toxicity Filtering'
field: 
  - Software Engineering
# cover: './logo.png'
github: ''
external: ''
type: Collaborative Research
tech:
  - Python
  - Seurat
affiliation: BUET
coauthor:
  - Md. Awsaf Alam
  - Dr. Jaydeb Sarker
  - Dr. Amiangshu Basu
  - Dr. Anindya Iqbal
status: 'Under Review at ASE 2025'
show: true
---

ToxiShield is a real-time framework that detects, classifies toxicity in GitHub pull request comments and mitigates them by suggesting a **semantically equivalent**, **non-toxic** alternative. We trained lightweight models such as *BERT-base-uncased* to prepare our toxicity detector - achieving an accuracy of **98.3%** and a F1-score of **96.8%**. We used LLMs for the detoxification workflow. Using a teacher-student framework, we reaped the benefits of proprietary LLMs such as GPT-4o by distilling their knowledge into much smaller open-source models such as Llama 3.2. Our results showed that the smaller open-source models outperformed their teacher models across multiple metrics of text style transfer. To make our framework usable, we condensed the entire workflow into a simple browser extension that can work seamlessly with GitHub.