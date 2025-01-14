// Funkcja do wyliczania ceny na podstawie zakresu cen
function getPriceByRange(quantity, priceRanges) {
    if (!priceRanges) return 0;

    let totalCost = 0;
    for (let range of priceRanges) {
        if (quantity > 0) {
            const applicableQuantity = Math.min(quantity, range.max - range.min + 1);
            totalCost += applicableQuantity * range.price;
            quantity -= applicableQuantity;
        }
    }
    return totalCost;
}

function calculateTotal() {
    // Pobieranie wartości z formularza
    const doublePrint = parseInt(document.getElementById("doublePrint").value) || 0;
    const blackWhiteQuantity = parseInt(document.getElementById("blackWhiteQuantity").value) || 0;
    const colorQuantity = parseInt(document.getElementById("colorQuantity").value) || 0;
    const binding = document.getElementById("binding").value;
    const bindingCover = document.getElementById("bindingCover").value;
    const laminating = document.getElementById("laminating").value;
    const largePrint = parseInt(document.getElementById("largePrint").value) || 0;

    // Obliczanie kosztów
    let total = 0;
    total += doublePrint * (prices.doublePrint || 0);
    total += getPriceByRange(blackWhiteQuantity, prices.blackWhite?.A4);
    total += getPriceByRange(colorQuantity, prices.colorPrint?.A4); // Mnożenie w zakresie
    total += prices.binding?.[binding] || 0;
    total += prices.bindingCover?.[bindingCover] || 0;
    total += prices.laminating?.[laminating] || 0;
    total += largePrint * (prices.largePrint || 0);

    // Wyświetlenie całkowitego kosztu
    document.getElementById("totalCost").innerText = total.toFixed(2);
}

// Dodanie nasłuchiwania zmian na elementach formularza
function addEventListeners() {
    const inputs = document.querySelectorAll("#orderForm input, #orderForm select");
    inputs.forEach(input => {
        input.addEventListener("input", calculateTotal);
        input.addEventListener("change", calculateTotal);
    });
}

// Aktualizacja interfejsu użytkownika z cenami po załadowaniu JSON
fetch('prices.json')
    .then(response => response.json())
    .then(data => {
        prices = data;
        document.getElementById('doublePrintPrice').innerText = `(${prices.doublePrint} zł/szt.)`;
        document.getElementById('blackWhitePrice').innerText = '(Sprawdź cennik)';
        document.getElementById('colorPrice').innerText = '(Sprawdź cennik)';
        document.getElementById('bindingPrice').innerText = `(plastik: ${prices.binding.plastic} zł, metal: ${prices.binding.metal} zł)`;
        document.getElementById('bindingCoverPrice').innerText = `(twarda: ${prices.bindingCover.hard} zł, miękka: ${prices.bindingCover.soft} zł)`;
        document.getElementById('laminatingPrice').innerText = `(A5: ${prices.laminating.A5} zł, A4: ${prices.laminating.A4} zł, A3: ${prices.laminating.A3} zł)`;
        document.getElementById('largePrintPrice').innerText = `(${prices.largePrint} zł/szt.)`;
        addEventListeners();
    })
    .catch(error => console.error('Błąd podczas ładowania cen:', error));