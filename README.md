# QR Code Generator 🧾➡️📱

A simple command-line QR code generator built with **Node.js**, using:

- [`@inquirer/prompts`](https://www.npmjs.com/package/@inquirer/prompts) for user input
- [`qr-image`](https://www.npmjs.com/package/qr-image) for generating QR codes
- Native `fs` module to save files

---

## 📦 Features

- Prompt user to enter a URL
- Generate a QR code image (PNG)
- Save the original URL to a text file

---

## 🚀 Installation

```bash
git clone https://github.com/abhinv11/qr-code-generator.git
cd qr-code-generator
npm install
````

---

## 📂 Usage

```bash
node index.js
```

Then enter the URL when prompted.
It will generate:

* `qr_image.png` — the QR code
* `URL.txt` — your saved URL

---

## 🛠️ Tech Stack

* Node.js
* ES Modules
* Inquirer Prompts
* QR Image
* File System (`fs`)

---

## 📸 Example

```
Enter your URL: https://www.openai.com

✅ QR code saved to qr_image.png  
✅ URL saved to URL.txt
```

---

## 📝 License

MIT License.
Feel free to use or modify for learning and development purposes.

---

## 👨‍💻 Author

Made with 💻 by [Abhinav Jaswal](https://github.com/abhinv11)

```


