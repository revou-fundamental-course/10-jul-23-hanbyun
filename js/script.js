// Declare local variable yang dibutuhkan
document.addEventListener("DOMContentLoaded", function () {
    const bmiForm = document.getElementById("bmiForm");
    const calculateBtn = document.getElementById("calculateBtn");
    const bmiResult = document.getElementById("bmiResult");
    const bmiCategory = document.getElementById("bmiCategory");
    const bmiTips = document.getElementById("bmiTips");

  //fungsi button
    bmiForm.addEventListener("submit", function (event) {
        event.preventDefault();
        calculateBMI();
    });

    calculateBtn.addEventListener("click", function () {
        calculateBMI();
    });

    bmiForm.addEventListener("reset", function () {
        bmiResult.textContent = "-";
        bmiCategory.textContent = "-";
        bmiTips.textContent = "-";
    });
    //kalkulasi BMI
    function calculateBMI() {
        const gender = document.getElementById("gender").value;
        const age = parseInt(document.getElementById("age").value);
        const height = parseInt(document.getElementById("height").value) / 100; // konversi ke meter
        const weight = parseInt(document.getElementById("weight").value);
       //validasi input
        let errorMessage = "";

        if (!gender) {
            errorMessage += "Harap pilih jenis kelamin.\n";
        }

        if (age < 18 || age > 150) {
            errorMessage += "Usia harus di antara 18 dan 150 tahun.\n";
        }

        if (height < 1 || height > 3) {
            errorMessage += "Tinggi badan harus di antara 100 dan 300 cm.\n";
        }

        if (weight < 10 || weight > 300) {
            errorMessage += "Berat badan harus di antara 10 dan 300 kg.\n";
        }

        if (errorMessage) {
            alert(errorMessage);
            return;
        }
      //Rumus BMI
        const bmi = (weight / (height * height)).toFixed(2);
        bmiResult.textContent = "BMI: " + bmi;

        // Kategori BMI
        let category = "";
        let tips = "";

        if (bmi < 18.5) {
            category = "Berat Badan Kurang";
            tips = "Berat badan Anda kurang, sebaiknya konsultasikan dengan dokter atau ahli gizi untuk program peningkatan berat badan yang sehat.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Berat Badan Ideal";
            tips = "Berat badan Anda dalam kategori ideal, pertahankan pola makan dan gaya hidup sehat untuk menjaga kesehatan.";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Kelebihan Berat Badan";
            tips = "Berat badan Anda berlebih, pertimbangkan untuk menjalani program penurunan berat badan dengan pola makan sehat dan olahraga teratur.";
        } else {
            category = "Obesitas";
            tips = "Anda mengalami obesitas, segera konsultasikan dengan dokter untuk mendapatkan program penurunan berat badan yang tepat.";
        }
     //menampilkan hasil
        bmiCategory.textContent = "Kategori: " + category;
        bmiTips.textContent = "Tips Kesehatan: " + tips;
    }
});
