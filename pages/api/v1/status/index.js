function status(request, response) {
  response.status(200).json({ chave: "são a média" })
}

export default status