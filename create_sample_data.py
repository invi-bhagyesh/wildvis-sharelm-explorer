# create_sample_data.py - Creates sample data for testing
import pandas as pd
import numpy as np
import os

print("Creating sample data for testing...")

# Create sample conversation data
sample_conversations = [
    {
        'conversation_id': 'sample_001',
        'full_text': 'HUMAN: What is machine learning?\n\nASSISTANT: Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every task.',
        'x': -2.5,
        'y': 1.2
    },
    {
        'conversation_id': 'sample_002', 
        'full_text': 'HUMAN: How do I cook pasta?\n\nASSISTANT: To cook pasta, bring a large pot of salted water to boil, add the pasta, and cook according to package directions until al dente. Drain and serve with your favorite sauce.',
        'x': 3.1,
        'y': -1.8
    },
    {
        'conversation_id': 'sample_003',
        'full_text': 'HUMAN: Explain quantum computing\n\nASSISTANT: Quantum computing uses quantum mechanical phenomena like superposition and entanglement to process information in ways that classical computers cannot.',
        'x': -1.2,
        'y': 2.9
    },
    {
        'conversation_id': 'sample_004',
        'full_text': 'HUMAN: What are the benefits of exercise?\n\nASSISTANT: Regular exercise improves cardiovascular health, strengthens muscles and bones, boosts mental health, helps with weight management, and increases energy levels.',
        'x': 2.8,
        'y': 0.5
    },
    {
        'conversation_id': 'sample_005',
        'full_text': 'HUMAN: How does photosynthesis work?\n\nASSISTANT: Photosynthesis is the process by which plants convert sunlight, carbon dioxide, and water into glucose and oxygen using chlorophyll in their leaves.',
        'x': 0.3,
        'y': -2.1
    }
]

# Create DataFrame and save
df = pd.DataFrame(sample_conversations)

# Ensure public directory exists
output_dir = 'public'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Save sample data
df.to_csv(os.path.join(output_dir, 'sharelm_data.csv'), index=False)

print("✅ Sample data created at 'public/sharelm_data.csv'")
print("You can now test the application with this sample data!")
print("To use real data later, run 'python prepare_data.py'")
