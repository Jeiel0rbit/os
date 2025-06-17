document.addEventListener('DOMContentLoaded', async () => {
    const loadingMessage = document.getElementById('loadingMessage');
    const siteContent = document.getElementById('siteContent');
    const accessDeniedDialog = document.getElementById('accessDeniedDialog');

    async function getGeolocation() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao obter geolocalização:', error);
            return null;
        }
    }

    const locationData = await getGeolocation();

    if (locationData) {
        const isBrazil = locationData.country_code === 'BR';
        const isPara = locationData.region === 'Pará';

        if (!isBrazil || !isPara) {
            if (loadingMessage) loadingMessage.style.display = 'none';
            if (accessDeniedDialog) accessDeniedDialog.classList.add('show');
        } else {
            if (loadingMessage) loadingMessage.style.display = 'none';
            if (siteContent) siteContent.style.display = 'block';
        }
    } else {
        if (loadingMessage) loadingMessage.style.display = 'none';
        if (accessDeniedDialog) accessDeniedDialog.classList.add('show');
    }
});
