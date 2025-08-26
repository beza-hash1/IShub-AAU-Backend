document.addEventListener("DOMContentLoaded", () => {
  const form = document.createElement("form");
  const title = document.createElement("h3");
  title.textContent = "Employee Details";
  form.appendChild(title);

  function addInput(labelText, type, name) {
    const label = document.createElement("label");
    label.textContent = labelText;
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
  }

  addInput("First name:", "text", "firstName");
  addInput("Last name:", "text", "lastName");

  const genderLabel = document.createElement("label");
  genderLabel.textContent = "Gender:";
  form.appendChild(genderLabel);
  form.appendChild(document.createElement("br"));

  ["Male", "Female"].forEach(g => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "gender";
    radio.value = g.toLowerCase();
    form.appendChild(radio);
    form.appendChild(document.createTextNode(g));
    form.appendChild(document.createElement("br"));
  });

  addInput("Employee ID:", "text", "employeeId");
  addInput("Designation:", "text", "designation");
  addInput("Phone Number:", "text", "phoneNumber");

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Submit";
  form.appendChild(submit);

  document.body.appendChild(form);
});
