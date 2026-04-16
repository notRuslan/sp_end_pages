function createCoin(className) {
    const coin = document.createElement('div');
    coin.className = className;
    return coin;
}

function showCoinReward() {
    const container = document.getElementById('reward-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const stackWrapper = document.createElement('div');
    stackWrapper.className = 'coin-stack-wrapper';
    container.appendChild(stackWrapper);

    const coinCount = 12;
    for (let i = 0; i < coinCount; i++) {
        setTimeout(() => {
            const coin = createCoin('stacked-coin');
            coin.style.bottom = `${i * 6}px`; 
            stackWrapper.appendChild(coin);
        }, i * 100);
    }

    setTimeout(() => {
        const roller = createCoin('rolling-coin-item');
        container.appendChild(roller);
    }, 400);
}
