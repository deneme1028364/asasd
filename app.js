// Tasarım seçimi
const designOptions = document.querySelectorAll('.design-option');
const customTextInput = document.getElementById('custom-text');
const updateTextButton = document.getElementById('update-text');
const htmlCodeDisplay = document.getElementById('html-code');

let selectedDesign = '';

// Şablon seçme işlemi
designOptions.forEach(option => {
    option.addEventListener('click', () => {
        selectedDesign = option.dataset.design;
        alert(${selectedDesign} seçildi!);
    });
});

// Metin değiştirme işlemi
updateTextButton.addEventListener('click', () => {
    const customText = customTextInput.value;
    
    if (selectedDesign) {
        // Seçilen tasarımı özelleştirelim
        let generatedHTML = generateHTML(selectedDesign, customText);
        htmlCodeDisplay.textContent = generatedHTML;
    } else {
        alert('Lütfen önce bir şablon seçin!');
    }
});

// HTML şablonunu oluşturma fonksiyonu
function generateHTML(design, text) {
    if (design === 'design1') {
        return `
            <html>
                <head><title>Şablon 1</title></head>
                <body>
                    <h1>Şablon 1</h1>
                    <p>${text}</p>
                </body>
            </html>
        `;
    } else if (design === 'design2') {
        return `
            <html>
                <head><title>Şablon 2</title></head>
                <body>
                    <h1>Şablon 2</h1>
                    <p>${text}</p>
                </body>
            </html>
        `;
    }
    return '';
}