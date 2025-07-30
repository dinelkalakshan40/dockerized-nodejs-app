const express =require('express');
const app =express();

const port =5000;
app.get("/posts", async (req, res) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Error fetching posts" });
  }
});

// Define endpoint to fetch post by id as query parameter
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching post by id:", error);
    res.status(500).json({ error: "Error fetching post by id" });
  }
});

app.listen(port,()=>{
    console.log(`Express app listening at http://localhost:${port}`)
})