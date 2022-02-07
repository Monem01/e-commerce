const produits = [
    {
      id: 0,
      libelle: "Chaussure",
      prix: 70.0,
      catheg: "sport",
      img: "chaussure.jpg",
      description:"Chaussure de runing",
      stock:"En_Stock"
    },
    {
      id: 1,
      libelle: "Bicyclette",
      prix: 349.0,
      catheg: "sport",
      img: "bike.jpg",
      description:"Bicyclette VTT PRADO Legend",
      stock:"En_Stock"
    },
    {
      id: 2,
      libelle: "Bicyclette",
      prix: 349.0,
      catheg: "sport",
      img: "bike2.jpg",
      description:"Bicyclette VTT PRADO",
      stock:"En_Stock"
    },
    {
      id: 3,
      libelle: "ASUS",
      prix: "2499,000",
      catheg: "info",
      img: "asus.jpg",
      description:"Écran 15.6Pouce FULL HD IPS, 144Hz - Processeur: Intel Core i5-9300H ( 2,40 GHz up to 4.10 GHz Turbo max, 8 Mo de mémoire cache, Quad-Core) - Système d'exploitation: Windows 10 Famille - Mémoire RAM: 16 Go - Disque Dur:512 Go SSD - Carte Graphique: NVIDIA® GeForce® GTX 1650 (4 Go de mémoire dédiée GDDR6) avec WiFi, Bluetooth,1xUSB 3.2 Gen 1, 1xUSB-C 3.2 Gen 1, 2 x USB 2.0, 1xPrise combo casque/microphone et lecteur de carte 2-en-1 SD/MMC - Couleur: Noir étoile - Garantie: 1 an",
      stock:"Epuiser"
    },
    {
      id: 4,
      libelle: "canape",
      prix: 500.0,
      catheg: "meuble",
      img: "canape.jpg",
      description:"",
      stock:"En_Stock"
    },
    {
      id: 5,
      libelle: "DELL",
      prix: "2 649,000",
      catheg: "info",
      img: "dell.jpg",
      description:"cran 15.6Pouce FULL HD,120HZ - Processeur: Intel Core i5-10500H (2.50 GHz up to 4.50 GHz, 12 Mo de mémoire cache, Hexa-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 8Go - Disque Dur: 512 Go SSD - Carte Graphique: NVIDIA GeForce GTX1650 (4Go de mémoire dédiée GDDR6) avec Wi-Fi, Bluetooth,1 X USB 2.0,1 X USB 2.0 port with PowerShare, 1 X USB 3.2 Gen 1 ,1x HDMI ,1x RJ45 - Garantie: 1 an ",
      stock:"En_Stock"
    },
    {
      id: 6,
      libelle: "MSI",
      prix: "2 799,000",
      catheg: "info",
      img: "msi.jpg",
      description:"Écran 15.6Pouce FULL HD IPS, 144 Hz - Processeur: Intel Core i5-11400H (2.70 GHz up to 4.50 GHz Turbo max, 12 Mo de mémoire cache, Hexa-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 8 Go - Disque dur: 512 Go SSD - Carte graphique: NVIDIA GeForce GTX 1650 (4 Go de mémoire dédiée GDDR6) avec Wi-Fi, Bluetooth, 1 x Type-C USB 3.2 Gen 1, 3 x Type-A USB 3.2 Gen 1, 1 x RJ45, 1 x HDMI, 1 x Entrée micro, 1 x Sortie casque - Clavier Rétroéclairage Rouge - Couleur: Noir - Garantie: 2 ans",
      stock:"En_Stock"
    },
    {
      id: 7,
      libelle: "TÉLÉVISEUR TELEFUNKEN",
      prix: "599,000",
      catheg: "info",
      img: "TÉLÉVISEUR TELEFUNKEN.jpg",
      description:"Téléviseur TELEFUNKEN 32Pouce LED HD Avec recepteur integré - Résolution: 1366 x 768 Pixels - Luminosité (cd/m2): 200 nits - Taux de rafraîchissement: 60 Hz - App préinstallée: minuterie d'arrêt - Système de protection des yeux - Connecteurs: 2x ports HDMI, 1x port USB - Sortie audio : 2 x 8 W - Dimensions: 720x188.5x480x7mm(avec support) ,  720x81x423.4mm(sans support) - Poids: 5 kg - Couleur: Noir - Garantie: 3 ans ",
      stock:"En_Stock"
    },
    {
      id: 8,
      libelle: "IMPRIMANTE hp",
      prix: "399,000 ",
      catheg: "info",
      img: "hp10_1.jpg",
      description:"imprimante Laser Jet Pro HP MFP M28A Multifonction 3en1 Monochrome - Fonctions: Impression, numérisation, copie - Format Papier: A4 - Technolgie d'impression: Laser - Vitesse d'impression ISO: Jusqu'à 19 ppm (N&B) - Résolution d'impression: Jusqu'à 600 x 600 ppp (Noir) - Résolution de numérisation: Jusqu'à 600 ppp - Mémoire: 32 Mo - Bac d'entrée de 100 feuilles - Connectivité: USB 2.0 haute vitesse - Dimensions: 360 x 264 x 197 mm - Poids: 5.4 kg - Garantie: 1 an",
      stock:"En_Stock"
    },
    {
      id: 9,
      libelle: "TÉLÉVISEUR VEGA",
      prix: "875,000",
      catheg: "info",
      img: "TÉLÉVISEUR VEGA.jpg",
      description:"Téléviseur VEGA 42Pouce FULL HD - Récepteur intégré - Résolution: 1920 x 1080 pixels - Rapport de contraste: 3000:1 - Aspect Ratio: 16:9 - Angle de Vision: 178° H/178° V - Temps de Réponse: 8 ms - Haut-parleurs: RMS 2 x 8 Watts - Connecteurs: 2 x USB, 3 x HDMI, DVB-T/T2/C - Couleur: Noir - Garantie: 3 ans",
      stock:"En_Stock"
    },
    {
      id: 10,
      libelle: "TÉLÉVISEUR LG",
      prix: "1 329,000",
      catheg: "info",
      img: "TÉLÉVISEUR LG.jpg",
      description:"Téléviseur LG 43Pouce LED FULL HD Smart Avec Récepteur Intégré - Résolution: 1920×1080 pixels -  Haut-parleurs RMS: 20 Watts - Connectivité: WiFi,Bluetooth - Mode économie d'énergie - Connecteurs: 2 x HDMI, 1 x USB,  1 x Ethernet RJ 45, 1 x Entrée vidéo composite - Garantie: 2 ans",
      stock:"En_Stock"
    },
    {
      id: 11,
      libelle: "IMPRIMANTE EPSON",
      prix: "479,000",
      enpromo: "",
      catheg: "info",
      img: "IMPRIMANTE EPSON.jpg",
      description:"imprimante EPSON ECOTANK ET-M1120 Monochrome - Fonctions: Impression - Technolgie d'impression: jet d'encre - Format Papier: A4 -  pages/min Monochrome - Vitesse d'impression: 32 pages/min Monochrome (papier ordinaire 75 g / m²) - Résolution d'impression: 1440 x 720 DPI  - Alimentation papier standard: 150 Feuilles - Connexions: USB, WiFi, Wi-Fi Direct - Dimensions:375 x 267 x 161 mm - Poids: 3,5 kg - Garantie: 1an ",
      stock:"En_Stock"
    },
    {
      id: 12,
      libelle: "INFINIX SMART 6",
      prix: "339,000",
      enpromo: "",
      catheg: "info",
      img: "infinix-smart6-.jpg",
      description:"Écran 6.6 LCD IPS (720 x 1600 pixels) - Processeur: Unisoc SC9863A Octa-core (4x1,6 GHz Cortex-A55 et 4x1,2 GHz Cortex-A55) - Système d'exploitation: Android 11(Go) - Mémoire  RAM: 2 Go - Stockage: 32 Go - Appareil Photo Arriére: Dual Pixels 8 MP AF + 0.8 MP, Flash Double-LED et Appareil Photo Frontale: 5 MP - Connctivité: 4G, WiFi et Bluetooth - Batterie: Li-Po 5000 mAh - Capteur d'empreinte Digitale et Déverrouillage facial - Double SIM - Couleur: Ocean - Garantie: 1 an",
      stock:"En_Stock"
    },
    
  ];
export default produits