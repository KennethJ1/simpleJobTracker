document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("jobForm");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const payload = {
        job: document.getElementById("job").value,
        company: document.getElementById("company").value,
        date: document.getElementById("date").value,
        link: document.getElementById("link").value,
        description: document.getElementById("description").value
      };
  
      try {
        // TODO: Replace this with your webhook URL
        const webhookURL = "https://script.google.com/macros/s/AKfycbxTrsfo_2SSV9jEcLTmvbrogR4iqnQTTyZRy8siWYyemLs6aQbCZv_dgfuuBQmg25xJJA/exec";
  
        const response = await fetch(webhookURL, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json"
          }
        });
  
        if (response.ok) {
          alert("Job saved successfully!");
          form.reset();
          document.getElementById("date").value = new Date().toISOString().split("T")[0];
        } else {
          alert("Failed to save job.");
        }
      } catch (err) {
        console.error("Error submitting job:", err);
        alert("An error occurred while saving the job.");
      }
    });
  });
  