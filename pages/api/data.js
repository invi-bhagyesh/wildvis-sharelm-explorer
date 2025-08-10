// Mock data for frontend testing - no CSV file required
const mockData = [
  {
    conversation_id: "conv_001",
    full_text:
      "HUMAN: What is machine learning?\n\nASSISTANT: Machine learning is a subset of artificial intelligence (AI) that enables computers to learn and make decisions from data without being explicitly programmed for every task. It involves algorithms that can identify patterns in data and use those patterns to make predictions or decisions about new, unseen data.",
    x: -2.5,
    y: 1.2,
  },
  {
    conversation_id: "conv_002",
    full_text:
      "HUMAN: How do I cook perfect pasta?\n\nASSISTANT: To cook perfect pasta: 1) Use a large pot with plenty of salted water (1 tablespoon salt per 4 cups water), 2) Bring to a rolling boil before adding pasta, 3) Stir occasionally to prevent sticking, 4) Cook until al dente (firm to the bite), 5) Reserve some pasta water before draining, 6) Toss immediately with sauce.",
    x: 3.1,
    y: -1.8,
  },
  {
    conversation_id: "conv_003",
    full_text:
      "HUMAN: Explain quantum computing in simple terms\n\nASSISTANT: Quantum computing uses the strange properties of quantum physics to process information. Unlike regular computers that use bits (0 or 1), quantum computers use quantum bits (qubits) that can be 0, 1, or both at the same time. This allows them to solve certain problems much faster than traditional computers.",
    x: -1.2,
    y: 2.9,
  },
  {
    conversation_id: "conv_004",
    full_text:
      "HUMAN: What are the health benefits of regular exercise?\n\nASSISTANT: Regular exercise provides numerous health benefits: improves cardiovascular health and reduces heart disease risk, strengthens muscles and bones, boosts mental health and reduces anxiety/depression, helps maintain healthy weight, increases energy levels, improves sleep quality, and enhances immune system function.",
    x: 2.8,
    y: 0.5,
  },
  {
    conversation_id: "conv_005",
    full_text:
      "HUMAN: How does photosynthesis work?\n\nASSISTANT: Photosynthesis is how plants make food using sunlight. Plants absorb sunlight through chlorophyll (the green pigment in leaves), take in carbon dioxide from air through tiny pores, and absorb water through roots. They combine these ingredients to create glucose (sugar) for energy and release oxygen as a byproduct.",
    x: 0.3,
    y: -2.1,
  },
  {
    conversation_id: "conv_006",
    full_text:
      "HUMAN: What is the difference between AI and machine learning?\n\nASSISTANT: AI (Artificial Intelligence) is the broader concept of machines being able to carry out tasks in a smart way. Machine Learning is a subset of AI that focuses on the idea that machines can learn from data. Think of AI as the goal (making machines smart) and ML as one of the methods to achieve that goal.",
    x: -2.8,
    y: 0.8,
  },
  {
    conversation_id: "conv_007",
    full_text:
      "HUMAN: How do I start learning programming?\n\nASSISTANT: To start programming: 1) Choose a beginner-friendly language like Python or JavaScript, 2) Use free online resources like Codecademy, freeCodeCamp, or Python.org tutorial, 3) Practice with small projects, 4) Join programming communities for support, 5) Be patient and consistent - programming takes time to master.",
    x: 1.5,
    y: 2.3,
  },
  {
    conversation_id: "conv_008",
    full_text:
      "HUMAN: What causes climate change?\n\nASSISTANT: Climate change is primarily caused by increased greenhouse gases in the atmosphere, mainly from human activities. The biggest contributor is carbon dioxide from burning fossil fuels (coal, oil, gas) for energy and transportation. Other factors include deforestation, industrial processes, and agriculture.",
    x: -0.5,
    y: -2.8,
  },
  {
    conversation_id: "conv_009",
    full_text:
      "HUMAN: How do I improve my productivity while working from home?\n\nASSISTANT: To boost work-from-home productivity: 1) Create a dedicated workspace, 2) Establish a routine and stick to regular hours, 3) Minimize distractions (social media, TV), 4) Take regular breaks, 5) Use productivity tools and techniques like the Pomodoro Technique, 6) Communicate clearly with colleagues.",
    x: 2.2,
    y: 1.7,
  },
  {
    conversation_id: "conv_010",
    full_text:
      "HUMAN: What is blockchain technology?\n\nASSISTANT: Blockchain is a digital ledger technology that stores information in blocks that are linked and secured using cryptography. Each block contains transaction data and is connected to the previous block, creating a chain. This makes it very difficult to alter past records, providing security and transparency.",
    x: -1.8,
    y: -0.9,
  },
  {
    conversation_id: "conv_011",
    full_text:
      "HUMAN: How do I take better photos with my smartphone?\n\nASSISTANT: For better smartphone photos: 1) Clean your lens regularly, 2) Use natural light when possible, 3) Follow the rule of thirds for composition, 4) Get closer to your subject, 5) Hold your phone steady or use a tripod, 6) Experiment with different angles, 7) Use HDR mode for high-contrast scenes.",
    x: 3.5,
    y: 0.2,
  },
  {
    conversation_id: "conv_012",
    full_text:
      "HUMAN: What is the importance of sleep for health?\n\nASSISTANT: Sleep is crucial for health because it allows your body and brain to repair and recharge. During sleep, your body produces important hormones, consolidates memories, strengthens the immune system, and removes toxins from the brain. Poor sleep is linked to numerous health problems including obesity, diabetes, and heart disease.",
    x: 1.9,
    y: -1.2,
  },
]

export default function handler(req, res) {
  try {
    let data = mockData

    // Filter by search query if provided
    const { search } = req.query
    if (search && search.trim()) {
      const searchTerm = search.toLowerCase()
      data = data.filter((row) => row.full_text && row.full_text.toLowerCase().includes(searchTerm))
    }

    res.status(200).json(data)
  } catch (error) {
    console.error("Error loading data:", error)
    res.status(500).json({ error: "Failed to load data" })
  }
}
