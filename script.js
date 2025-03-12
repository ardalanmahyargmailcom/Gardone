function generateMatches() {
    const players = ["نوید", "مهیار", "فرشید", "رامیار"];
    const matches = [];
    
    // تولید بازی‌های دو به دو
    for (let i = 0; i < players.length; i++) {
        for (let j = i + 1; j < players.length; j++) {
            matches.push(`${players[i]} vs ${players[j]}`);
        }
    }

    // نمایش بازی‌ها
    const matchesDiv = document.getElementById('matches');
    matchesDiv.innerHTML = ''; // پاک کردن محتوای قبلی
    matches.forEach((match, index) => {
        matchesDiv.innerHTML += `<p>بازی ${index + 1}: ${match}</p>`;
    });
}