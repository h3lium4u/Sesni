export interface Phone {
  id: string;
  brand: string;
  model: string;
  dpi: number;
  releaseYear: number;
}

export const phoneDatabase: Phone[] = [
  // Samsung (2020-2025)
  { id: "samsung-s20", brand: "Samsung", model: "Galaxy S20", dpi: 480, releaseYear: 2020 },
  { id: "samsung-s20-plus", brand: "Samsung", model: "Galaxy S20+", dpi: 480, releaseYear: 2020 },
  { id: "samsung-s20-ultra", brand: "Samsung", model: "Galaxy S20 Ultra", dpi: 480, releaseYear: 2020 },
  { id: "samsung-s21", brand: "Samsung", model: "Galaxy S21", dpi: 480, releaseYear: 2021 },
  { id: "samsung-s21-plus", brand: "Samsung", model: "Galaxy S21+", dpi: 480, releaseYear: 2021 },
  { id: "samsung-s21-ultra", brand: "Samsung", model: "Galaxy S21 Ultra", dpi: 480, releaseYear: 2021 },
  { id: "samsung-s22", brand: "Samsung", model: "Galaxy S22", dpi: 480, releaseYear: 2022 },
  { id: "samsung-s22-plus", brand: "Samsung", model: "Galaxy S22+", dpi: 480, releaseYear: 2022 },
  { id: "samsung-s22-ultra", brand: "Samsung", model: "Galaxy S22 Ultra", dpi: 480, releaseYear: 2022 },
  { id: "samsung-s23", brand: "Samsung", model: "Galaxy S23", dpi: 480, releaseYear: 2023 },
  { id: "samsung-s23-plus", brand: "Samsung", model: "Galaxy S23+", dpi: 480, releaseYear: 2023 },
  { id: "samsung-s23-ultra", brand: "Samsung", model: "Galaxy S23 Ultra", dpi: 480, releaseYear: 2023 },
  { id: "samsung-s24", brand: "Samsung", model: "Galaxy S24", dpi: 480, releaseYear: 2024 },
  { id: "samsung-s24-plus", brand: "Samsung", model: "Galaxy S24+", dpi: 480, releaseYear: 2024 },
  { id: "samsung-s24-ultra", brand: "Samsung", model: "Galaxy S24 Ultra", dpi: 480, releaseYear: 2024 },
  { id: "samsung-a51", brand: "Samsung", model: "Galaxy A51", dpi: 420, releaseYear: 2020 },
  { id: "samsung-a71", brand: "Samsung", model: "Galaxy A71", dpi: 420, releaseYear: 2020 },
  { id: "samsung-a52", brand: "Samsung", model: "Galaxy A52", dpi: 420, releaseYear: 2021 },
  { id: "samsung-a72", brand: "Samsung", model: "Galaxy A72", dpi: 420, releaseYear: 2021 },
  { id: "samsung-a53", brand: "Samsung", model: "Galaxy A53", dpi: 420, releaseYear: 2022 },
  { id: "samsung-a73", brand: "Samsung", model: "Galaxy A73", dpi: 420, releaseYear: 2022 },
  { id: "samsung-a54", brand: "Samsung", model: "Galaxy A54", dpi: 420, releaseYear: 2023 },
  { id: "samsung-a34", brand: "Samsung", model: "Galaxy A34", dpi: 420, releaseYear: 2023 },
  
  // Xiaomi (2020-2025)
  { id: "xiaomi-mi10", brand: "Xiaomi", model: "Mi 10", dpi: 440, releaseYear: 2020 },
  { id: "xiaomi-mi10-pro", brand: "Xiaomi", model: "Mi 10 Pro", dpi: 440, releaseYear: 2020 },
  { id: "xiaomi-mi11", brand: "Xiaomi", model: "Mi 11", dpi: 480, releaseYear: 2021 },
  { id: "xiaomi-mi11-ultra", brand: "Xiaomi", model: "Mi 11 Ultra", dpi: 480, releaseYear: 2021 },
  { id: "xiaomi-12", brand: "Xiaomi", model: "12", dpi: 480, releaseYear: 2022 },
  { id: "xiaomi-12-pro", brand: "Xiaomi", model: "12 Pro", dpi: 480, releaseYear: 2022 },
  { id: "xiaomi-13", brand: "Xiaomi", model: "13", dpi: 480, releaseYear: 2023 },
  { id: "xiaomi-13-pro", brand: "Xiaomi", model: "13 Pro", dpi: 480, releaseYear: 2023 },
  { id: "xiaomi-14", brand: "Xiaomi", model: "14", dpi: 480, releaseYear: 2024 },
  { id: "xiaomi-14-pro", brand: "Xiaomi", model: "14 Pro", dpi: 480, releaseYear: 2024 },
  { id: "redmi-note9", brand: "Xiaomi", model: "Redmi Note 9", dpi: 395, releaseYear: 2020 },
  { id: "redmi-note10", brand: "Xiaomi", model: "Redmi Note 10", dpi: 395, releaseYear: 2021 },
  { id: "redmi-note11", brand: "Xiaomi", model: "Redmi Note 11", dpi: 395, releaseYear: 2022 },
  { id: "redmi-note12", brand: "Xiaomi", model: "Redmi Note 12", dpi: 395, releaseYear: 2023 },
  { id: "redmi-note13", brand: "Xiaomi", model: "Redmi Note 13", dpi: 395, releaseYear: 2024 },
  
  // Oppo (2020-2025)
  { id: "oppo-find-x2", brand: "Oppo", model: "Find X2", dpi: 480, releaseYear: 2020 },
  { id: "oppo-find-x3", brand: "Oppo", model: "Find X3 Pro", dpi: 480, releaseYear: 2021 },
  { id: "oppo-find-x5", brand: "Oppo", model: "Find X5 Pro", dpi: 480, releaseYear: 2022 },
  { id: "oppo-find-x6", brand: "Oppo", model: "Find X6 Pro", dpi: 480, releaseYear: 2023 },
  { id: "oppo-find-x7", brand: "Oppo", model: "Find X7 Ultra", dpi: 480, releaseYear: 2024 },
  { id: "oppo-reno4", brand: "Oppo", model: "Reno4 Pro", dpi: 420, releaseYear: 2020 },
  { id: "oppo-reno5", brand: "Oppo", model: "Reno5 Pro", dpi: 420, releaseYear: 2021 },
  { id: "oppo-reno6", brand: "Oppo", model: "Reno6 Pro", dpi: 420, releaseYear: 2021 },
  { id: "oppo-reno7", brand: "Oppo", model: "Reno7 Pro", dpi: 420, releaseYear: 2022 },
  { id: "oppo-reno8", brand: "Oppo", model: "Reno8 Pro", dpi: 420, releaseYear: 2022 },
  { id: "oppo-reno10", brand: "Oppo", model: "Reno10 Pro", dpi: 420, releaseYear: 2023 },
  { id: "oppo-reno11", brand: "Oppo", model: "Reno11 Pro", dpi: 420, releaseYear: 2024 },
  
  // Vivo (2020-2025)
  { id: "vivo-x50", brand: "Vivo", model: "X50 Pro", dpi: 440, releaseYear: 2020 },
  { id: "vivo-x60", brand: "Vivo", model: "X60 Pro", dpi: 440, releaseYear: 2021 },
  { id: "vivo-x70", brand: "Vivo", model: "X70 Pro", dpi: 440, releaseYear: 2021 },
  { id: "vivo-x80", brand: "Vivo", model: "X80 Pro", dpi: 480, releaseYear: 2022 },
  { id: "vivo-x90", brand: "Vivo", model: "X90 Pro", dpi: 480, releaseYear: 2023 },
  { id: "vivo-x100", brand: "Vivo", model: "X100 Pro", dpi: 480, releaseYear: 2024 },
  { id: "vivo-v20", brand: "Vivo", model: "V20", dpi: 408, releaseYear: 2020 },
  { id: "vivo-v21", brand: "Vivo", model: "V21", dpi: 408, releaseYear: 2021 },
  { id: "vivo-v23", brand: "Vivo", model: "V23", dpi: 408, releaseYear: 2022 },
  { id: "vivo-v27", brand: "Vivo", model: "V27", dpi: 408, releaseYear: 2023 },
  { id: "vivo-v29", brand: "Vivo", model: "V29", dpi: 408, releaseYear: 2024 },
  
  // Poco (2020-2025)
  { id: "poco-f2", brand: "Poco", model: "F2 Pro", dpi: 395, releaseYear: 2020 },
  { id: "poco-f3", brand: "Poco", model: "F3", dpi: 395, releaseYear: 2021 },
  { id: "poco-f4", brand: "Poco", model: "F4", dpi: 395, releaseYear: 2022 },
  { id: "poco-f5", brand: "Poco", model: "F5", dpi: 395, releaseYear: 2023 },
  { id: "poco-f6", brand: "Poco", model: "F6", dpi: 395, releaseYear: 2024 },
  { id: "poco-x3", brand: "Poco", model: "X3 NFC", dpi: 395, releaseYear: 2020 },
  { id: "poco-x4", brand: "Poco", model: "X4 Pro", dpi: 395, releaseYear: 2022 },
  { id: "poco-x5", brand: "Poco", model: "X5 Pro", dpi: 395, releaseYear: 2023 },
  { id: "poco-x6", brand: "Poco", model: "X6 Pro", dpi: 395, releaseYear: 2024 },
  
  // Honor (2020-2025)
  { id: "honor-30", brand: "Honor", model: "30 Pro", dpi: 440, releaseYear: 2020 },
  { id: "honor-50", brand: "Honor", model: "50", dpi: 440, releaseYear: 2021 },
  { id: "honor-60", brand: "Honor", model: "60 Pro", dpi: 440, releaseYear: 2021 },
  { id: "honor-70", brand: "Honor", model: "70", dpi: 440, releaseYear: 2022 },
  { id: "honor-80", brand: "Honor", model: "80 Pro", dpi: 440, releaseYear: 2022 },
  { id: "honor-90", brand: "Honor", model: "90", dpi: 440, releaseYear: 2023 },
  { id: "honor-100", brand: "Honor", model: "100 Pro", dpi: 440, releaseYear: 2024 },
  { id: "honor-magic4", brand: "Honor", model: "Magic4 Pro", dpi: 480, releaseYear: 2022 },
  { id: "honor-magic5", brand: "Honor", model: "Magic5 Pro", dpi: 480, releaseYear: 2023 },
  { id: "honor-magic6", brand: "Honor", model: "Magic6 Pro", dpi: 480, releaseYear: 2024 },
  
  // OnePlus (2020-2025)
  { id: "oneplus-8", brand: "OnePlus", model: "8", dpi: 420, releaseYear: 2020 },
  { id: "oneplus-8-pro", brand: "OnePlus", model: "8 Pro", dpi: 480, releaseYear: 2020 },
  { id: "oneplus-9", brand: "OnePlus", model: "9", dpi: 420, releaseYear: 2021 },
  { id: "oneplus-9-pro", brand: "OnePlus", model: "9 Pro", dpi: 480, releaseYear: 2021 },
  { id: "oneplus-10-pro", brand: "OnePlus", model: "10 Pro", dpi: 480, releaseYear: 2022 },
  { id: "oneplus-11", brand: "OnePlus", model: "11", dpi: 480, releaseYear: 2023 },
  { id: "oneplus-12", brand: "OnePlus", model: "12", dpi: 480, releaseYear: 2024 },
  { id: "oneplus-nord", brand: "OnePlus", model: "Nord", dpi: 408, releaseYear: 2020 },
  { id: "oneplus-nord2", brand: "OnePlus", model: "Nord 2", dpi: 408, releaseYear: 2021 },
  { id: "oneplus-nord3", brand: "OnePlus", model: "Nord 3", dpi: 408, releaseYear: 2023 },
  
  // ROG (2020-2025)
  { id: "rog-phone3", brand: "ROG", model: "Phone 3", dpi: 395, releaseYear: 2020 },
  { id: "rog-phone5", brand: "ROG", model: "Phone 5", dpi: 395, releaseYear: 2021 },
  { id: "rog-phone6", brand: "ROG", model: "Phone 6", dpi: 395, releaseYear: 2022 },
  { id: "rog-phone7", brand: "ROG", model: "Phone 7", dpi: 395, releaseYear: 2023 },
  { id: "rog-phone8", brand: "ROG", model: "Phone 8 Pro", dpi: 395, releaseYear: 2024 },
  
  // iPhone (2020-2025)
  { id: "iphone-11", brand: "iPhone", model: "11", dpi: 326, releaseYear: 2020 },
  { id: "iphone-11-pro", brand: "iPhone", model: "11 Pro", dpi: 458, releaseYear: 2020 },
  { id: "iphone-12", brand: "iPhone", model: "12", dpi: 460, releaseYear: 2020 },
  { id: "iphone-12-pro", brand: "iPhone", model: "12 Pro", dpi: 460, releaseYear: 2020 },
  { id: "iphone-12-mini", brand: "iPhone", model: "12 Mini", dpi: 476, releaseYear: 2020 },
  { id: "iphone-13", brand: "iPhone", model: "13", dpi: 460, releaseYear: 2021 },
  { id: "iphone-13-pro", brand: "iPhone", model: "13 Pro", dpi: 460, releaseYear: 2021 },
  { id: "iphone-13-mini", brand: "iPhone", model: "13 Mini", dpi: 476, releaseYear: 2021 },
  { id: "iphone-14", brand: "iPhone", model: "14", dpi: 460, releaseYear: 2022 },
  { id: "iphone-14-pro", brand: "iPhone", model: "14 Pro", dpi: 460, releaseYear: 2022 },
  { id: "iphone-14-plus", brand: "iPhone", model: "14 Plus", dpi: 458, releaseYear: 2022 },
  { id: "iphone-15", brand: "iPhone", model: "15", dpi: 460, releaseYear: 2023 },
  { id: "iphone-15-pro", brand: "iPhone", model: "15 Pro", dpi: 460, releaseYear: 2023 },
  { id: "iphone-15-plus", brand: "iPhone", model: "15 Plus", dpi: 460, releaseYear: 2023 },
  { id: "iphone-16", brand: "iPhone", model: "16", dpi: 460, releaseYear: 2024 },
  { id: "iphone-16-pro", brand: "iPhone", model: "16 Pro", dpi: 460, releaseYear: 2024 },
  
  // Lenovo (2020-2025)
  { id: "lenovo-legion-duel", brand: "Lenovo", model: "Legion Duel", dpi: 395, releaseYear: 2020 },
  { id: "lenovo-legion-duel2", brand: "Lenovo", model: "Legion Duel 2", dpi: 395, releaseYear: 2021 },
  { id: "lenovo-legion-y70", brand: "Lenovo", model: "Legion Y70", dpi: 395, releaseYear: 2022 },
  { id: "lenovo-legion-y90", brand: "Lenovo", model: "Legion Y90", dpi: 395, releaseYear: 2023 },

  // Additional Samsung Models
  { id: "samsung-a55", brand: "Samsung", model: "Galaxy A55", dpi: 420, releaseYear: 2024 },
  { id: "samsung-a35", brand: "Samsung", model: "Galaxy A35", dpi: 420, releaseYear: 2024 },
  { id: "samsung-m51", brand: "Samsung", model: "Galaxy M51", dpi: 420, releaseYear: 2020 },
  { id: "samsung-m52", brand: "Samsung", model: "Galaxy M52", dpi: 420, releaseYear: 2021 },
  { id: "samsung-m53", brand: "Samsung", model: "Galaxy M53", dpi: 420, releaseYear: 2022 },
  { id: "samsung-a14", brand: "Samsung", model: "Galaxy A14", dpi: 395, releaseYear: 2023 },
  { id: "samsung-a24", brand: "Samsung", model: "Galaxy A24", dpi: 395, releaseYear: 2023 },
  { id: "samsung-zfold3", brand: "Samsung", model: "Galaxy Z Fold3", dpi: 420, releaseYear: 2021 },
  { id: "samsung-zfold4", brand: "Samsung", model: "Galaxy Z Fold4", dpi: 420, releaseYear: 2022 },
  { id: "samsung-zfold5", brand: "Samsung", model: "Galaxy Z Fold5", dpi: 420, releaseYear: 2023 },
  { id: "samsung-zflip3", brand: "Samsung", model: "Galaxy Z Flip3", dpi: 425, releaseYear: 2021 },
  { id: "samsung-zflip4", brand: "Samsung", model: "Galaxy Z Flip4", dpi: 425, releaseYear: 2022 },

  // Additional Xiaomi Models
  { id: "redmi-k40", brand: "Xiaomi", model: "Redmi K40", dpi: 395, releaseYear: 2021 },
  { id: "redmi-k50", brand: "Xiaomi", model: "Redmi K50", dpi: 395, releaseYear: 2022 },
  { id: "redmi-k60", brand: "Xiaomi", model: "Redmi K60", dpi: 395, releaseYear: 2023 },
  { id: "xiaomi-11t", brand: "Xiaomi", model: "11T Pro", dpi: 480, releaseYear: 2021 },
  { id: "xiaomi-12t", brand: "Xiaomi", model: "12T Pro", dpi: 480, releaseYear: 2022 },
  { id: "xiaomi-13t", brand: "Xiaomi", model: "13T Pro", dpi: 480, releaseYear: 2023 },
  { id: "redmi-note-10-pro", brand: "Xiaomi", model: "Redmi Note 10 Pro", dpi: 395, releaseYear: 2021 },
  { id: "redmi-note-11-pro", brand: "Xiaomi", model: "Redmi Note 11 Pro", dpi: 395, releaseYear: 2022 },
  { id: "redmi-note-12-pro", brand: "Xiaomi", model: "Redmi Note 12 Pro", dpi: 395, releaseYear: 2023 },
  { id: "xiaomi-mix-4", brand: "Xiaomi", model: "Mi Mix 4", dpi: 480, releaseYear: 2021 },

  // Additional Oppo Models
  { id: "oppo-a74", brand: "Oppo", model: "A74", dpi: 395, releaseYear: 2021 },
  { id: "oppo-a94", brand: "Oppo", model: "A94", dpi: 395, releaseYear: 2021 },
  { id: "oppo-a54", brand: "Oppo", model: "A54", dpi: 395, releaseYear: 2021 },
  { id: "oppo-a76", brand: "Oppo", model: "A76", dpi: 395, releaseYear: 2022 },
  { id: "oppo-a96", brand: "Oppo", model: "A96", dpi: 395, releaseYear: 2022 },
  { id: "oppo-a78", brand: "Oppo", model: "A78", dpi: 395, releaseYear: 2023 },
  { id: "oppo-f19", brand: "Oppo", model: "F19 Pro", dpi: 408, releaseYear: 2021 },
  { id: "oppo-f21", brand: "Oppo", model: "F21 Pro", dpi: 408, releaseYear: 2022 },

  // Additional Vivo Models
  { id: "vivo-y20", brand: "Vivo", model: "Y20", dpi: 395, releaseYear: 2020 },
  { id: "vivo-y73", brand: "Vivo", model: "Y73", dpi: 395, releaseYear: 2021 },
  { id: "vivo-y33s", brand: "Vivo", model: "Y33s", dpi: 395, releaseYear: 2021 },
  { id: "vivo-y55", brand: "Vivo", model: "Y55", dpi: 395, releaseYear: 2022 },
  { id: "vivo-y35", brand: "Vivo", model: "Y35", dpi: 395, releaseYear: 2022 },
  { id: "vivo-y36", brand: "Vivo", model: "Y36", dpi: 395, releaseYear: 2023 },
  { id: "vivo-t1", brand: "Vivo", model: "T1 5G", dpi: 408, releaseYear: 2022 },
  { id: "vivo-t2", brand: "Vivo", model: "T2 5G", dpi: 408, releaseYear: 2023 },

  // Additional Poco Models
  { id: "poco-m3", brand: "Poco", model: "M3", dpi: 395, releaseYear: 2020 },
  { id: "poco-m4", brand: "Poco", model: "M4 Pro", dpi: 395, releaseYear: 2022 },
  { id: "poco-m5", brand: "Poco", model: "M5", dpi: 395, releaseYear: 2022 },
  { id: "poco-m6", brand: "Poco", model: "M6 Pro", dpi: 395, releaseYear: 2024 },
  { id: "poco-c3", brand: "Poco", model: "C3", dpi: 395, releaseYear: 2020 },
  { id: "poco-c40", brand: "Poco", model: "C40", dpi: 395, releaseYear: 2022 },

  // Additional OnePlus Models
  { id: "oneplus-nord-ce", brand: "OnePlus", model: "Nord CE", dpi: 408, releaseYear: 2021 },
  { id: "oneplus-nord-ce-2", brand: "OnePlus", model: "Nord CE 2", dpi: 408, releaseYear: 2022 },
  { id: "oneplus-nord-ce-3", brand: "OnePlus", model: "Nord CE 3", dpi: 408, releaseYear: 2023 },
  { id: "oneplus-10t", brand: "OnePlus", model: "10T", dpi: 480, releaseYear: 2022 },
  { id: "oneplus-11r", brand: "OnePlus", model: "11R", dpi: 450, releaseYear: 2023 },

  // Additional Honor Models
  { id: "honor-x8", brand: "Honor", model: "X8", dpi: 395, releaseYear: 2022 },
  { id: "honor-x9", brand: "Honor", model: "X9", dpi: 395, releaseYear: 2023 },
  { id: "honor-play-5", brand: "Honor", model: "Play 5", dpi: 395, releaseYear: 2021 },
  { id: "honor-play-6", brand: "Honor", model: "Play 6", dpi: 395, releaseYear: 2022 },
  { id: "honor-x7", brand: "Honor", model: "X7", dpi: 395, releaseYear: 2022 },

  // Realme (Additional brand)
  { id: "realme-gt", brand: "Realme", model: "GT", dpi: 395, releaseYear: 2021 },
  { id: "realme-gt2", brand: "Realme", model: "GT 2 Pro", dpi: 480, releaseYear: 2022 },
  { id: "realme-gt3", brand: "Realme", model: "GT 3", dpi: 480, releaseYear: 2023 },
  { id: "realme-8-pro", brand: "Realme", model: "8 Pro", dpi: 395, releaseYear: 2021 },
  { id: "realme-9-pro", brand: "Realme", model: "9 Pro+", dpi: 395, releaseYear: 2022 },
  { id: "realme-10-pro", brand: "Realme", model: "10 Pro+", dpi: 395, releaseYear: 2023 },
  { id: "realme-11-pro", brand: "Realme", model: "11 Pro+", dpi: 395, releaseYear: 2023 },
  { id: "realme-c35", brand: "Realme", model: "C35", dpi: 395, releaseYear: 2022 },
  { id: "realme-narzo-50", brand: "Realme", model: "Narzo 50", dpi: 395, releaseYear: 2022 },

  // Motorola (Additional brand)
  { id: "moto-edge-20", brand: "Motorola", model: "Edge 20", dpi: 395, releaseYear: 2021 },
  { id: "moto-edge-30", brand: "Motorola", model: "Edge 30", dpi: 395, releaseYear: 2022 },
  { id: "moto-edge-40", brand: "Motorola", model: "Edge 40", dpi: 395, releaseYear: 2023 },
  { id: "moto-g60", brand: "Motorola", model: "G60", dpi: 395, releaseYear: 2021 },
  { id: "moto-g82", brand: "Motorola", model: "G82", dpi: 395, releaseYear: 2022 },
  { id: "moto-g84", brand: "Motorola", model: "G84", dpi: 395, releaseYear: 2023 },

  // Google Pixel (Additional brand)
  { id: "pixel-5", brand: "Google", model: "Pixel 5", dpi: 432, releaseYear: 2020 },
  { id: "pixel-6", brand: "Google", model: "Pixel 6", dpi: 411, releaseYear: 2021 },
  { id: "pixel-6-pro", brand: "Google", model: "Pixel 6 Pro", dpi: 512, releaseYear: 2021 },
  { id: "pixel-7", brand: "Google", model: "Pixel 7", dpi: 416, releaseYear: 2022 },
  { id: "pixel-7-pro", brand: "Google", model: "Pixel 7 Pro", dpi: 512, releaseYear: 2022 },
  { id: "pixel-8", brand: "Google", model: "Pixel 8", dpi: 428, releaseYear: 2023 },
  { id: "pixel-8-pro", brand: "Google", model: "Pixel 8 Pro", dpi: 489, releaseYear: 2023 },
];
