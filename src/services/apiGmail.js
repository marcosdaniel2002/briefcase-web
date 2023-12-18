const serviceID = "service_y8adjt7";
const templateID = "template_k5mas6e";

export async function sendEmail(params) {
  const data = {
    service_id: serviceID,
    template_id: templateID,
    user_id: "Ak0QVcHRNCRty11My",
    template_params: params,
  };

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error("something went wrong!");

    return "Sucessfully email sent!";
  } catch (err) {
    throw Error(err.message);
  }
}
