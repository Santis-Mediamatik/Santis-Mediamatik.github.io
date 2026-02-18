//Activation variables
let activation = false;
let activation_1 = false;
let activation_2 = false;
let activation_3_1 = false;
let activation_3_2 = false;
let activation_4_1 = false;
let activation_4_2 = false;
let activation_5 = false;
let activation_6 = false;
let activation_7 = false;
let activation_8 = false;
let activation_9 = false;
let activation_10_1 = false;
let activation_11 = false;
let activation_12 = false;
let activation_listening = false;
let audiofinished = false;

//Start page
document.addEventListener('DOMContentLoaded', function() {
    let showWhy = document.getElementById('showWhy');
    if (showWhy) {
        showWhy.onclick = function() {
            document.getElementById('pop_up_message_why').style.display = 'block';
        }
    }
})

function closeWhy() {
    let popupwhy = document.getElementById('pop_up_message_why');
    if (popupwhy) {
        popupwhy.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let startQuiz = document.getElementById('start');
    if (startQuiz) {
        startQuiz.onclick = function() {
            window.location.href = "quiz_start.html";
        }
    }
})
//Quiz pages - Help
function closeHelp() {
    let popupHelp = document.getElementById('pop_up_message_help_start');
    if (popupHelp) {
        popupHelp.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let showHelp = document.getElementById('showHelp');
    if (showHelp) {
        showHelp.onclick = function() {
            document.getElementById('pop_up_message_help_start').style.display = 'block';
        }
    }
})

//Quiz pages - Notes
document.addEventListener('DOMContentLoaded', function() {
    let notesArea = document.getElementById("notes_area");
    if (notesArea) {
        notesArea.value = localStorage.getItem("quiz_notes") || "";
        notesArea.oninput = function() {
            localStorage.setItem("quiz_notes", document.getElementById("notes_area").value);
        } 
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let notesButton = document.getElementById("notes_button");
    if (notesButton) {
        notesButton.onclick = function() {
            document.getElementById("notes").classList.toggle("hidden");
        }
    }
})


//Back buttons
document.addEventListener('DOMContentLoaded', function() {
    let backToTitle = document.getElementById("back_to_title");
    if (backToTitle) {
        backToTitle.onclick = function() {
            window.location.href = "index.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToStart = document.getElementById("back_to_start");
    if (backToStart) {
        backToStart.onclick = function() {
            window.location.href = "../files/quiz_start.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ1 = document.getElementById("back_to_q1");
    if (backToQ1) {
        backToQ1.onclick = function() {
        window.location.href = "../questions/q1.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ2 = document.getElementById("back_to_q2");
    if (backToQ2) {
        backToQ2.onclick = function() {
        window.location.href = "../questions/q2.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ3 = document.getElementById("back_to_q3");
    if (backToQ3) {
        backToQ3.onclick = function() {
        window.location.href = "../questions/q3.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ4 = document.getElementById("back_to_q4");
    if (backToQ4) {
        backToQ4.onclick = function() {
        window.location.href = "../questions/q4.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ5 = document.getElementById("back_to_q5");
    if (backToQ5) {
        backToQ5.onclick = function() {
        window.location.href = "../questions/q5.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ6 = document.getElementById("back_to_q6");
    if (backToQ6) {
        backToQ6.onclick = function() {
        window.location.href = "../questions/q6.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ7 = document.getElementById("back_to_q7");
    if (backToQ7) {
        backToQ7.onclick = function() {
        window.location.href = "../questions/q7.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ8 = document.getElementById("back_to_q8");
    if (backToQ8) {
        backToQ8.onclick = function() {
            window.location.href = "../questions/q8.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ9 = document.getElementById("back_to_q9");
    if (backToQ9) {
        backToQ9.onclick = function() {
            window.location.href = "../questions/q9.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ10 = document.getElementById("back_to_q10");
    if (backToQ10) {
        backToQ10.onclick = function() {
            window.location.href = "../questions/q10.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ11 = document.getElementById("back_to_q11");
    if (backToQ11) {
        backToQ11.onclick = function() {
            window.location.href = "../questions/q11.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToQ12 = document.getElementById("back_to_q12");
    if (backToQ12) {
        backToQ12.onclick = function() {
            window.location.href = "../questions/q12.html";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let backToListening = document.getElementById("back_to_listening");
    if (backToListening) {
        backToListening.onclick = function() {
            window.location.href = "../questions/qlistening.html";
        }
    }
})

//Forward buttons
document.addEventListener('DOMContentLoaded', function() {
    let forward1 = document.getElementById("forward_1");
    if (forward1) {
        forward1.onclick = function() {
            if (localStorage.getItem("quiz_notes") != "" && localStorage.getItem("quiz_notes") != null) {
                window.location.href = "../questions/q1.html";
            }
            else {
                alert("Bitte lesen Sie die Instruktionen.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward2 = document.getElementById("forward_2");
    if (forward2) {
        forward2.onclick = function() {
            let checkbox_false_1 = document.getElementById("option1");
            let checkbox_1 = document.getElementById("option2");
            let checkbox_2 = document.getElementById("option3");
            let checkbox_false_2 = document.getElementById("option4");
            let checkbox_false_3 = document.getElementById("option5");
            let checkbox_3 = document.getElementById("option6");
            if (checkbox_1.checked && checkbox_2.checked && checkbox_3.checked && !checkbox_false_1.checked && !checkbox_false_2.checked && !checkbox_false_3.checked) {
                activation_1 = true;
            }
            if (activation_1 == true) {
                window.location.href = "../questions/q2.html";
            }
            else {
                alert("Es sind noch nicht alle Aufgaben des Santis Logos ausgewählt worden, oder eine Aufgabe wurde fälschlicherweise ausgewählt.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward3 = document.getElementById("forward_3");
    if (forward3) {
        forward3.onclick = function() {
            dropzone1 = document.getElementById("dropzone1").querySelector("#img6");
            dropzone2 = document.getElementById("dropzone2").querySelector("img");
            dropzone3 = document.getElementById("dropzone3").querySelector("#img13");
            dropzone4 = document.getElementById("dropzone4").querySelector("img");
            if (dropzone1 && !dropzone2 && dropzone3 && !dropzone4) {
                activation_2 = true;
            }
            if (activation_2 == true) {
                window.location.href = "../questions/q3.html";
            }
            else {
                alert("Es ist entweder ein falsches Element in einer Zone oder eine wichtige Zone ist leer.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward4 = document.getElementById("forward_4");
    if (forward4) {
        forward4.onclick = function() {
            if (activation_3_1 && activation_3_2) {
                window.location.href = "../questions/q4.html";
            }
            else {
                alert("Die Grössen des Logos sind nicht korrekt eingestellt.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward5 = document.getElementById("forward_5");
    if (forward5) {
        forward5.onclick = function() {
            if (activation_4_1 && activation_4_2) {
                window.location.href = "../questions/q5.html";
            }
            else {
                alert("Das Verhältnis der Abstände zum Logo ist nicht korrekt.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward6 = document.getElementById("forward_6");
    if (forward6) {
        forward6.onclick = function() {
            if (activation_5) {
                window.location.href = "../questions/q6.html";
            }
            else {
                alert("Das ist nicht der richtige Pantone Farbcode.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward7 = document.getElementById("forward_7");
    if (forward7) {
        forward7.onclick = function() {
            if (activation_6) {
                window.location.href = "../questions/q7.html";
            }
            else {
                alert("Das ist nicht die richtige HEX-Farbe gemäss CI/CD der Santis.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward8 = document.getElementById("forward_8");
    if (forward8) {
        forward8.onclick = function() {
            if (activation_7) {
                window.location.href = "../questions/q8.html";
            }
            else {
                alert("Hier fehlen entweder noch Schriften oder die Schriften sind nicht korrekt gewählt worden.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward9 = document.getElementById("forward_9");
    if (forward9) {
        forward9.onclick = function() {
            if (activation_8) {
                window.location.href = "../questions/q9.html";
            }
            else {
                alert("Das ist nicht die richtige Ersatzschrift für Arial.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward10 = document.getElementById("forward_10");
    if (forward10) {
        forward10.onclick = function() {
            if (activation_9) {
                window.location.href = "../questions/q10.html";
            }
            else {
                alert("Das ist nicht das richtige Format für interne Drucke.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward11 = document.getElementById("forward_11");
    if (forward11) {
        forward11.onclick = function() {
            if (activation_10_1) {
                window.location.href = "../questions/q11.html";
            }
            else {
                alert("Es sind noch nicht alle gültigen Farbkombinationen ausgewählt worden.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward12 = document.getElementById("forward_12");
    if (forward12) {
        forward12.onclick = function() {
            if (activation_11) {
                window.location.href = "../questions/q12.html";
            }
            else {
                alert("Das ist nicht die richtige Emailsignatur gemäss CI/CD der Santis.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forwardlistening = document.getElementById("forward_listening");
    if (forwardlistening) {
        forwardlistening.onclick = function() {
            let checkbox_1 = document.getElementById("option1_12");
            let checkbox_false_1 = document.getElementById("option2_12");
            let checkbox_2 = document.getElementById("option3_12");
            let checkbox_false_2 = document.getElementById("option4_12");
            let checkbox_false_3 = document.getElementById("option5_12");
            let checkbox_false_4 = document.getElementById("option6_12");
            let checkbox_3 = document.getElementById("option7_12");
            let checkbox_4 = document.getElementById("option8_12");
            if (checkbox_1.checked && checkbox_2.checked && checkbox_3.checked && checkbox_4.checked && !checkbox_false_1.checked && !checkbox_false_2.checked && !checkbox_false_3.checked && !checkbox_false_4.checked) {
                activation_12 = true;
            }
            if (activation_12 == true) {
                window.location.href = "../questions/qlistening.html";
            }
            else {
                alert("Die Bilder entsprechen nicht alle den Angaben des CI/CD oder es fehlen noch Bilder in der Auswahl.");
            }
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let forward_finish = document.getElementById("forward_finish");
    if (forward_finish) {
        forward_finish.onclick = function() {
            if (activation_listening) {
                window.location.href = "../questions/finish.html";
            }
            else {
                alert("Geben Sie die richitge Anzahl Fehler ein und warten Sie bis das Hörverständnis fertig ist.");
            }
        }
    }
})

//Q1 - Checkboxes
if (document.querySelector(".q1")) {
    document.addEventListener('DOMContentLoaded', function() {
        let checkboxes = document.querySelectorAll('.checkbox_1');

        checkboxes.forEach(function(checkbox) {
            let savedState = localStorage.getItem(checkbox.id);
            if (savedState === 'true') {
                checkbox.checked = true;
            } else if (savedState === 'false') {
                checkbox.checked = false;
            }

            checkbox.addEventListener('change', function() {
                localStorage.setItem(this.id, this.checked);
            });
        });
    });
}

//Q2 - Drag and Drop
if (document.querySelector(".q2")) {
    function dragstartHandler(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        ev.dataTransfer.setData("type", ev.target.dataset.type);
    }
    function dragoverHandler(ev) {
        ev.preventDefault();
    }
    function dropHandler(ev) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        let draggedType = ev.dataTransfer.getData("type");
        let draggedElement = document.getElementById(data);
        let dropzone = ev.target.classList.contains('dropzone') ? ev.target : ev.target.closest('.dropzone');

        if (draggedElement && dropzone) {
            let acceptedType = dropzone.dataset.accepts;
            if (draggedType === acceptedType) {
                let oldDropzone = draggedElement.parentElement;
                if (oldDropzone && oldDropzone.classList.contains('dropzone')) {
                    oldDropzone.classList.remove('has-content');
                }
                dropzone.appendChild(draggedElement);
                draggedElement.classList.add("dropped");
                dropzone.classList.add("has-content");
                localStorage.setItem(draggedElement.id, dropzone.id);
            } else {
                alert("Dieses Element kann hier nicht platziert werden!");
            }
        }
    }
    document.addEventListener('DOMContentLoaded', function() {
        let draggableImages = document.querySelectorAll('.draggable');
        draggableImages.forEach(function(img) {
            let savedDropzoneId = localStorage.getItem(img.id);
            if (savedDropzoneId) {
                let dropzone = document.getElementById(savedDropzoneId);
                if (dropzone) {
                    dropzone.appendChild(img);
                    img.classList.add("dropped");
                    dropzone.classList.add("has-content");
                }
            }
        })
    })
}


//Q3 - Sliders
if (document.querySelector(".q3")) {
    document.addEventListener('DOMContentLoaded', function() {
        value_px = localStorage.getItem("q3_slider_px");
        value_mm = localStorage.getItem("q3_slider_mm");
        if (value_px) {
            document.getElementById("q3_slider_px").value = value_px;
            updatePxOutput();
        }
        if (value_mm) {
            document.getElementById("q3_slider_mm").value = value_mm;
            updateMmOutput();
        }
    })

    function updatePxOutput() {
        let slider = document.getElementById("q3_slider_px");
        let output = document.getElementById("px_output");
        let picture_px = document.querySelector(".logo_santis_q3_px");
        output.innerHTML = slider.value + " Pixel";
        picture_px.style.height = slider.value + "px";
        localStorage.setItem("q3_slider_px", slider.value);
        if (slider.value === "40") {
            activation_3_1 = true;
        }
        else {
            activation_3_1 = false;
        }
    }

    function updateMmOutput() {
        let slider = document.getElementById("q3_slider_mm");
        let output = document.getElementById("mm_output");
        let picture_mm = document.querySelector(".logo_santis_q3_mm");
        output.innerHTML = slider.value + " Millimeter";
        picture_mm.style.height = (slider.value * 3.78) + "px";
        localStorage.setItem("q3_slider_mm", slider.value);
        if (slider.value === "7") {
            activation_3_2 = true;
        }
        else {
            activation_3_2 = false;
        }
    }
}

//Q4 - Resize

if (document.querySelector(".q4")) {
    document.addEventListener('DOMContentLoaded', function() {
        const resizeBox = document.querySelector('.resize_q4');
        
        // Load saved dimensions
        let savedWidth = localStorage.getItem("q4_width");
        let savedHeight = localStorage.getItem("q4_height");
        
        if (savedWidth) {
            resizeBox.style.width = savedWidth + "px";
        }
        if (savedHeight) {
            resizeBox.style.height = savedHeight + "px";
        }

        // Create resize handles
        const rightHandle = document.createElement('div');
        rightHandle.className = 'resize-handle resize-handle-right';
        resizeBox.appendChild(rightHandle);
        
        const bottomHandle = document.createElement('div');
        bottomHandle.className = 'resize-handle resize-handle-bottom';
        resizeBox.appendChild(bottomHandle);
        
        const minWidth = 506.67;
        const minHeight = 150;
        
        let isDragging = false;
        let currentHandle = null;
        let startX = 0;
        let startY = 0;
        let startWidth = 0;
        let startHeight = 0;
        
        function updateMarkers() {
            document.querySelectorAll('.spacing-marker').forEach(marker => marker.remove());
                
            const width = resizeBox.offsetWidth;
            const height = resizeBox.offsetHeight;
            const spacing = 40;
            const logoWidth = 476.67;
            const logoHeight = 120;
            const horizontalPadding = (width - logoWidth) / 2;
            const verticalPadding = (height - logoHeight) / 2;

            const topSections = Math.floor(verticalPadding / spacing);
            if (topSections > 0) {
                for (let i = 0; i < topSections; i++) {
                    const marker = document.createElement('img');
                    marker.className = 'spacing-marker spacing-marker-top';
                    marker.src = '../media/a_img.png';
                    marker.style.top = (i * spacing) + 'px';
                    marker.style.left = '50%';
                    resizeBox.appendChild(marker);
                }
            }
            
            const bottomSections = Math.floor(verticalPadding / spacing);
            if (bottomSections > 0) {
                for (let i = 0; i < bottomSections; i++) {
                    const marker = document.createElement('img');
                    marker.className = 'spacing-marker spacing-marker-bottom';
                    marker.src = '../media/a_img.png';
                    marker.style.bottom = (i * spacing) + 'px';
                    marker.style.left = '50%';
                    resizeBox.appendChild(marker);
                }
            }
            
            const leftSections = Math.floor(horizontalPadding / spacing);
            if (leftSections > 0) {
                for (let i = 0; i < leftSections; i++) {
                    const marker = document.createElement('img');
                    marker.className = 'spacing-marker spacing-marker-left';
                    marker.src = '../media/a_img.png';
                    marker.style.left = (i * spacing) + 'px';
                    marker.style.top = '50%';
                    resizeBox.appendChild(marker);
                }
            }
            
            const rightSections = Math.floor(horizontalPadding / spacing);
            if (rightSections > 0) {
                for (let i = 0; i < rightSections; i++) {
                    const marker = document.createElement('img');
                    marker.className = 'spacing-marker spacing-marker-right';
                    marker.src = '../media/a_img.png';
                    marker.style.right = (i * spacing) + 'px';
                    marker.style.top = '50%';
                    resizeBox.appendChild(marker);
                }
            }
        }

        updateMarkers();

        rightHandle.addEventListener('mousedown', function(e) {
            isDragging = true;
            currentHandle = 'right';
            startX = e.clientX;
            startWidth = resizeBox.offsetWidth;
            startHeight = resizeBox.offsetHeight;
            e.preventDefault();
        });
        
        bottomHandle.addEventListener('mousedown', function(e) {
            isDragging = true;
            currentHandle = 'bottom';
            startY = e.clientY;
            startWidth = resizeBox.offsetWidth;
            startHeight = resizeBox.offsetHeight;
            e.preventDefault();
        });
        
        function activationQ4() {
            const currentWidth = parseFloat(localStorage.getItem("q4_width"));
            const currentHeight = parseFloat(localStorage.getItem("q4_height"));
            
            if (currentHeight === 200) {
                activation_4_2 = true;
            }
            else {
                activation_4_2 = false;
            }
            if (currentWidth === 556.6700000000001) {
                activation_4_1 = true;
            }
            else {
                activation_4_1 = false;
            }
        }
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
                
            if (currentHandle === 'right') {
                const deltaX = e.clientX - startX;
                const newWidth = Math.max(minWidth, startWidth + (deltaX * 2));
                
                const logoWidth = 476.67;
                const padding = (newWidth - logoWidth) / 2;
                const snappedPadding = Math.round(padding / 40) * 40;
                const snappedWidth = logoWidth + (snappedPadding * 2);

                resizeBox.style.width = snappedWidth + 'px';
                updateMarkers();
                localStorage.setItem("q4_width", snappedWidth);
            } 
            else if (currentHandle === 'bottom') {
                const deltaY = e.clientY - startY;
                const newHeight = Math.max(minHeight, startHeight + (deltaY * 2));
                
                const logoHeight = 120;
                const padding = (newHeight - logoHeight) / 2;
                const snappedPadding = Math.round(padding / 40) * 40;
                const snappedHeight = logoHeight + (snappedPadding * 2);

                resizeBox.style.height = snappedHeight + 'px';
                updateMarkers();
                localStorage.setItem("q4_height", snappedHeight);
            }
            activationQ4();
            ratio();
        });
        
        document.addEventListener('mouseup', function() {
            if (isDragging) {
                isDragging = false;
                currentHandle = null;
            }
        });

        function gcd(a, b) {
            return b === 0 ? a : gcd(b, a % b);
        }

        function ratio() {
            let ratioHTML = document.querySelector(".q4_ratio");
                
            const currentWidth = parseFloat(localStorage.getItem("q4_width"));
            const currentHeight = parseFloat(localStorage.getItem("q4_height"));
                
            const logoWidth = 476.67;
            const logoHeight = 120;
                
            const horizontalPadding = (currentWidth - logoWidth) / 2;
            const verticalPadding = (currentHeight - logoHeight) / 2;
                
            // Only show fraction if padding is equal on all sides
            if (Math.abs(horizontalPadding - verticalPadding) > 0.1) {
                document.querySelector(".A_Ratio").style.display = "none";
                return;
            }
            else {
                document.querySelector(".A_Ratio").style.display = "block";
            }
            
            const ratio = verticalPadding / logoHeight;
                
            if (isNaN(ratio) || ratio === 0) {
                ratioHTML.innerHTML = `<span class="fraction"><span class="numerator">0</span><span class="denominator">1</span></span>`;
                return;
            }
            
            // Find best rational approximation with small denominator (max 20)
            let bestNumerator = 0;
            let bestDenominator = 1;
            let minError = Math.abs(ratio);
            
            for (let denominator = 1; denominator <= 20; denominator++) {
                let numerator = Math.round(ratio * denominator);
                let error = Math.abs(ratio - numerator / denominator);
                if (error < minError) {
                    minError = error;
                    bestNumerator = numerator;
                    bestDenominator = denominator;
                }
            }
            
            // Simplify the fraction
            const divisor = gcd(Math.abs(bestNumerator), bestDenominator);
            bestNumerator = bestNumerator / divisor;
            bestDenominator = bestDenominator / divisor;
        
            ratioHTML.innerHTML = `<span class="fraction"><span class="numerator">${bestNumerator}</span><span class="denominator">${bestDenominator}</span></span>`;
        }

        activationQ4();
        ratio();
    });
}

//Q5 - Radiobuttons

if (document.querySelector(".q5")) {
    document.addEventListener('DOMContentLoaded', function() {
        let radioButtons = document.querySelectorAll('input[name="pantone"]');
        radioButtons.forEach(function(radio) {
            let savedValue = localStorage.getItem("selected_pantone");
            if (savedValue === radio.value) {
                radio.checked = true;
            }
            radio.addEventListener('change', function() {
                if (radio.checked) {
                    localStorage.setItem("selected_pantone", radio.value);
                    activationQ5();
                }
            });
            activationQ5();
        });

        function activationQ5() {
            if (document.getElementById("option_282C").checked) {
                activation_5 = true;
            }
            else {
                activation_5 = false;
            }
        }
    });
    
}

//Q6 - HEX Input

if (document.querySelector(".q6")) {
    document.addEventListener('DOMContentLoaded', function() {
        const colorPicker = document.querySelector('.colorPicker');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = 300;
        canvas.width = size;
        canvas.height = size;
        colorPicker.appendChild(canvas);
        
        // Create marker
        const marker = document.createElement('div');
        marker.className = 'color-marker';
        colorPicker.appendChild(marker);
        
        const valuesDiv = document.getElementById('values');
        const hexInput = document.getElementById('hexInput');
        
        // Draw color wheel
        function drawColorWheel() {
            const centerX = size / 2;
            const centerY = size / 2;
            const radius = size / 2;
            
            for (let angle = 0; angle < 360; angle++) {
                const startAngle = (angle - 90) * Math.PI / 180;
                const endAngle = (angle + 1 - 90) * Math.PI / 180;
                
                for (let r = 0; r < radius; r++) {
                    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
                    const hue = angle;
                    const saturation = (r / radius) * 100;
                    
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, r, startAngle, endAngle);
                    ctx.strokeStyle = `hsl(${hue}, ${saturation}%, 50%)`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        
        drawColorWheel();
        
        // Convert HSL to RGB
        function hslToRgb(h, s, l) {
            s /= 100;
            l /= 100;
            const k = n => (n + h / 30) % 12;
            const a = s * Math.min(l, 1 - l);
            const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
            return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
        }
        
        // Convert RGB to HSL
        function rgbToHsl(r, g, b) {
            r /= 255;
            g /= 255;
            b /= 255;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h, s, l = (max + min) / 2;

            if (max === min) {
                h = s = 0;
            } else {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                    case g: h = ((b - r) / d + 2) / 6; break;
                    case b: h = ((r - g) / d + 4) / 6; break;
                }
            }
            return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
        }
        
        // Convert RGB to HEX
        function rgbToHex(r, g, b) {
            return "#" + [r, g, b].map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            }).join('');
        }
        
        // Convert HEX to RGB
        function hexToRgb(hex) {
            hex = hex.replace('#', '');
            if (hex.length === 3) {
                hex = hex.split('').map(c => c + c).join('');
            }
            const num = parseInt(hex, 16);
            return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
        }
        
        // Update marker position based on HSL
        function updateMarkerPosition(h, s, l) {
            const centerX = size / 2;
            const centerY = size / 2;
            const radius = (s / 100) * (size / 2);
            const angle = (h - 90) * Math.PI / 180;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            marker.style.left = x + 'px';
            marker.style.top = y + 'px';
        }
        
        // Update all displays
        function updateDisplays(r, g, b, h, s, l, hex) {
            valuesDiv.innerHTML = `
                <div>RGB: <input type="text" id="rgbInput" value="${r}, ${g}, ${b}" style="outline: none; border: 0; width: 150px; background: transparent;"></div>
                <div>HSL: <input type="text" id="hslInput" value="${Math.round(h)}°, ${Math.round(s)}%, ${l}%" style="outline: none; border: 0; width: 150px; background: transparent;"></div>
            `;
            hexInput.value = hex;
            hexInput.style.backgroundColor = hex;
            hexInput.style.color = l > 50 ? '#000' : '#fff';
            marker.style.backgroundColor = hex;
            updateMarkerPosition(h, s, l);
                
            // Add event listeners to new inputs
            const rgbInput = document.getElementById('rgbInput');
            const hslInput = document.getElementById('hslInput');
                
            rgbInput.addEventListener('blur', handleRgbInput);
            rgbInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleRgbInput(e);
                }
            });
            
            hslInput.addEventListener('blur', handleHslInput);
            hslInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleHslInput(e);
                }
                
            });
            
            // Save to localStorage
            localStorage.setItem('q6_color', JSON.stringify({ r, g, b, h, s, l, hex }));
            activationQ6();
        }
        
        // Handle RGB input
        function handleRgbInput(e) {
            const value = e.target.value.replace(/[^\d,]/g, '');
            const parts = value.split(',').map(p => parseInt(p.trim()));
            if (parts.length === 3 && parts.every(p => p >= 0 && p <= 255)) {
                const [r, g, b] = parts;
                const [h, s, l] = rgbToHsl(r, g, b);
                const hex = rgbToHex(r, g, b);
                updateDisplays(r, g, b, h, s, l, hex);
            }
        }
        
        // Handle HSL input
        function handleHslInput(e) {
            const value = e.target.value.replace(/[^\d,]/g, '');
            const parts = value.split(',').map(p => parseInt(p.trim()));
            if (parts.length === 3 && parts[0] >= 0 && parts[0] <= 360 && parts[1] >= 0 && parts[1] <= 100 && parts[2] >= 0 && parts[2] <= 100) {
                const [h, s, l] = parts;
                const [r, g, b] = hslToRgb(h, s, l);
                const hex = rgbToHex(r, g, b);
                updateDisplays(r, g, b, h, s, l, hex);
            }
        }
        
        // Handle HEX input
        hexInput.addEventListener('blur', function(e) {
            let hex = e.target.value.trim();
            if (!hex.startsWith('#')) hex = '#' + hex;
            if (/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(hex)) {
                const [r, g, b] = hexToRgb(hex);
                const [h, s, l] = rgbToHsl(r, g, b);
                updateDisplays(r, g, b, h, s, l, hex);
            }
        });

        hexInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                let hex = e.target.value.trim();
                if (!hex.startsWith('#')) hex = '#' + hex;
                if (/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(hex)) {
                    const [r, g, b] = hexToRgb(hex);
                    const [h, s, l] = rgbToHsl(r, g, b);
                    updateDisplays(r, g, b, h, s, l, hex);
                }
            }
        });
        
        // Update color from wheel click
        function updateColor(x, y) {
            const centerX = size / 2;
            const centerY = size / 2;
            
            const dx = x - centerX;
            const dy = y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxRadius = size / 2;
            
            if (distance > maxRadius) return;
            
            const angle = Math.atan2(dy, dx);
            const hue = (angle * 180 / Math.PI + 90 + 360) % 360;
            const saturation = Math.min((distance / maxRadius) * 100, 100);
            const lightness = 50;
            
            const [r, g, b] = hslToRgb(hue, saturation, lightness);
            const hex = rgbToHex(r, g, b);
            
            updateDisplays(r, g, b, hue, saturation, lightness, hex);
            
            marker.style.left = x + 'px';
            marker.style.top = y + 'px';
        }
        
        // Mouse events
        let isDragging = false;
        
        canvas.addEventListener('mousedown', function(e) {
            isDragging = true;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            updateColor(x, y);
        });
        
        canvas.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            updateColor(x, y);
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        // Load saved color
        const savedColor = localStorage.getItem('q6_color');
        if (savedColor) {
            const color = JSON.parse(savedColor);
            updateDisplays(color.r, color.g, color.b, color.h, color.s, color.l, color.hex);
        } else {
            // Default color
            updateDisplays(255, 0, 0, 0, 100, 50, '#ff0000');
        }

        function activationQ6() {
            const savedColor = localStorage.getItem('q6_color');
            if (savedColor) {
                const color = JSON.parse(savedColor);
                if (color.hex.toLowerCase() === '#031f40') {
                    activation_6 = true;
                } else {
                    activation_6 = false;
                }
            }
        }
        activationQ6();
    });
}

//Q7 - Drag And Drop 2

if (document.querySelector(".q7")) {
    function dragstartHandler(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    function dragoverHandler(ev) {
        ev.preventDefault();
    }
    function dropHandler(ev) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        let draggedElement_font = document.getElementById(data);
        let dropzone_font = ev.target.classList.contains('dropzone_font') ? ev.target : ev.target.closest('.dropzone_font');

        if (draggedElement_font && dropzone_font) {
            let hasFont = dropzone_font.querySelector('.draggable_font');
            if (hasFont) {
                return;
            }
            let oldDropzone = draggedElement_font.parentElement;
            if (oldDropzone && oldDropzone.classList.contains('dropzone_font')) {
                oldDropzone.classList.remove('has-content');
            }
            dropzone_font.appendChild(draggedElement_font);
            draggedElement_font.classList.add("dropped_font");
            dropzone_font.classList.add("has-content");
            localStorage.setItem(draggedElement_font.id, dropzone_font.id);
        }
        activationQ7();
    }
    document.addEventListener('DOMContentLoaded', function() {
        let draggableFont = document.querySelectorAll('.draggable_font');
        draggableFont.forEach(function(fnt) {
            let savedDropzoneIdFont = localStorage.getItem(fnt.id);
            if (savedDropzoneIdFont) {
                let dropzone_font = document.getElementById(savedDropzoneIdFont);
                if (dropzone_font) {
                    dropzone_font.appendChild(fnt);
                    fnt.classList.add("dropped_font");
                    dropzone_font.classList.add("has-content");
                }
            }
        })
        activationQ7();
    })
    function activationQ7() {
        let dropzoneA = document.getElementById("dropzone2_1");
        let dropzoneB = document.getElementById("dropzone2_2");
        let fieldA = dropzoneA.querySelector("#font2");;
        let fieldB = dropzoneB.querySelector("#font8");
        if (fieldA && fieldB) {
            activation_7 = true;
        }
        else {
            activation_7 = false;
        }
    }
}

//Q8 - Checkboxes 2

if (document.querySelector(".q8")) {
    document.addEventListener('DOMContentLoaded', function() {
        let radio_font = document.querySelectorAll('.font_radio');
        radio_font.forEach(function(radio) {
            let savedState = localStorage.getItem("radio_font");
            if (savedState === radio.value) {
                radio.checked = true;
            }
            radio.addEventListener('change', function() {
                localStorage.setItem("radio_font", radio.value);
                activationQ8();
            });
        });
    activationQ8();
    });
        function activationQ8() {
            if (document.getElementById("option_helvetica").checked) {
                activation_8 = true;
            }
            else {
                activation_8 = false;
            }
        }
}

//Q9 - Dropdown

if (document.querySelector(".q9")) {
    document.addEventListener('DOMContentLoaded', function() {
        let savedFormat2 = localStorage.getItem("selected_format2");
        if (savedFormat2) {
            const text2 = document.querySelector(".dropdownBtn2")
            text2.textContent = savedFormat2;
            text2.classList.add("input_selected");
            activationQ9();
        }
        else {
            const text2 = document.querySelector(".dropdownBtn2")
            text2.textContent = "interne Dateiformate";
        }
    });
    window.onclick = function(event) {
        if (!event.target.matches('.dropdownBtn2')) {
            var dropdowns = document.getElementsByClassName("dropdownMenu2");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    function Menu2() {
        let dropdown = document.getElementById("dropdownMenu2");
        dropdown.classList.toggle("show");
    }
    function selectOption2(format) {
        const text = document.querySelector(".dropdownBtn2")
        text.textContent = format;
        text.classList.add("input_selected");

        localStorage.setItem("selected_format2", format);
        activationQ9();
    }
    function activationQ9() {
        let format2 = localStorage.getItem("selected_format2");
        if (format2 === ".jpg") {
            activation_9 = true;
        }
        else {
            activation_9 = false;
        }
    }
}

//Q10 - Color Wheel 2
let originalImageSrc = null;

if (document.querySelector(".q10")) {
    document.addEventListener('DOMContentLoaded', function() {
        const logoImg = document.querySelector('.logo_image10');
        if (logoImg && logoImg.src) {
            originalImageSrc = logoImg.src;
        }
        const colorPicker = document.querySelector('.colorPicker10');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = 300;
        canvas.width = size;
        canvas.height = size;
        colorPicker.appendChild(canvas);
        
        // Create marker
        const marker = document.createElement('div');
        marker.className = 'color-marker10';
        colorPicker.appendChild(marker);
        
        const valuesDiv = document.getElementById('values10');
        const hexInput = document.getElementById('hexInput10');
        
        // Draw color wheel
        function drawColorWheel() {
            const centerX = size / 2;
            const centerY = size / 2;
            const radius = size / 2;
            
            for (let angle = 0; angle < 360; angle++) {
                const startAngle = (angle - 90) * Math.PI / 180;
                const endAngle = (angle + 1 - 90) * Math.PI / 180;
                
                for (let r = 0; r < radius; r++) {
                    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
                    const hue = angle;
                    const saturation = (r / radius) * 100;
                    
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, r, startAngle, endAngle);
                    ctx.strokeStyle = `hsl(${hue}, ${saturation}%, 50%)`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        
        drawColorWheel();
        
        function createRecolorableCanvas(imgElement, targetColor) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Set canvas size to match image
            canvas.width = imgElement.naturalWidth || imgElement.width;
            canvas.height = imgElement.naturalHeight || imgElement.height;

            // Draw the image
            ctx.drawImage(imgElement, 0, 0);

            // Get pixel data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Parse target color
            const [targetR, targetG, targetB] = hexToRgb(targetColor);

            // Recolor every pixel while preserving alpha
            for (let i = 0; i < data.length; i += 4) {
                // Keep the alpha channel (transparency/shape)
                const alpha = data[i + 3];

                if (alpha > 0) {
                    // Replace RGB with target color, keep alpha
                    data[i] = targetR;         // R
                    data[i + 1] = targetG;     // G
                    data[i + 2] = targetB;     // B
                    // data[i + 3] stays the same (alpha)
                }
            }

            // Put the modified pixels back
            ctx.putImageData(imageData, 0, 0);

            // Return as data URL
            return canvas.toDataURL();
        }

        // Convert HSL to RGB
        function hslToRgb(h, s, l) {
            s /= 100;
            l /= 100;
            const k = n => (n + h / 30) % 12;
            const a = s * Math.min(l, 1 - l);
            const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
            return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
        }
        
        // Convert RGB to HSL
        function rgbToHsl(r, g, b) {
            r /= 255;
            g /= 255;
            b /= 255;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h, s, l = (max + min) / 2;

            if (max === min) {
                h = s = 0;
            } else {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                    case g: h = ((b - r) / d + 2) / 6; break;
                    case b: h = ((r - g) / d + 4) / 6; break;
                }
            }
            return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
        }
        
        // Convert RGB to HEX
        function rgbToHex(r, g, b) {
            return "#" + [r, g, b].map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            }).join('');
        }
        
        // Convert HEX to RGB
        function hexToRgb(hex) {
            hex = hex.replace('#', '');
            if (hex.length === 3) {
                hex = hex.split('').map(c => c + c).join('');
            }
            const num = parseInt(hex, 16);
            return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
        }
        
        // Update marker position based on HSL
        function updateMarkerPosition(h, s, l) {
            const centerX = size / 2;
            const centerY = size / 2;
            const radius = (s / 100) * (size / 2);
            const angle = (h - 90) * Math.PI / 180;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            marker.style.left = x + 'px';
            marker.style.top = y + 'px';
        }
        
        // Update all displays
        function updateDisplays(r, g, b, h, s, l, hex) {
            valuesDiv.innerHTML = `
                <div>RGB: <input type="text" id="rgbInput" value="${r}, ${g}, ${b}" style="outline: none; border: 0; width: 150px; background: transparent;"></div>
                <div>HSL: <input type="text" id="hslInput" value="${Math.round(h)}°, ${Math.round(s)}%, ${l}%" style="outline: none; border: 0; width: 150px; background: transparent;"></div>
            `;
            hexInput.value = hex;
            hexInput.style.backgroundColor = hex;
            hexInput.style.color = l > 50 ? '#000' : '#fff';
            marker.style.backgroundColor = hex;
            updateMarkerPosition(h, s, l);
                
            // Add event listeners to new inputs
            const rgbInput = document.getElementById('rgbInput');
            const hslInput = document.getElementById('hslInput');
                
            rgbInput.addEventListener('blur', handleRgbInput);
            rgbInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleRgbInput(e);
                }
            });
            
            hslInput.addEventListener('blur', handleHslInput);
            hslInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleHslInput(e);
                }
                
            });
            
            const selectedbg = document.querySelector(".selectedbg")
            const selectedimg = document.querySelector(".selectedimg")

            // Load previously saved combination values from localStorage
            let savedCombination = JSON.parse(localStorage.getItem('q10_current_combination') || '{"bg":"", "img":""}');
            let SavedNumberHexBG = savedCombination.bg;
            let SavedNumberHexIMG = savedCombination.img;

            // Update whichever is currently selected
            if (selectedbg) {
                selectedbg.style.backgroundColor = hex;
                if (hex.toLowerCase() === "#ffffff" || hex.toLowerCase() === "#fff") {
                    SavedNumberHexBG = "1";
                } 
                else if (hex.toLowerCase() === "#000000" || hex.toLowerCase() === "#000") {
                    SavedNumberHexBG = "2";
                }
                else if (hex.toLowerCase() === "#031f40") {
                    SavedNumberHexBG = "3";
                }
                // If hex doesn't match any valid color, SavedNumberHexBG keeps its previous value
            }

            if (selectedimg) {
                // Always use the white logo as the base and recolor it to any color
                const whiteLogo = '../media/SANTIS_Logo_2026_White.png';
                        
                const tempImg = new Image();
                tempImg.crossOrigin = "anonymous";
                tempImg.onload = function() {
                    logoImg.src = createRecolorableCanvas(tempImg, hex);
                };
                tempImg.src = whiteLogo;
                
                // Still track the three specific colors for combination validation
                if (hex.toLowerCase() === '#ffffff' || hex.toLowerCase() === '#fff') {
                    SavedNumberHexIMG = "1";
                } else if (hex.toLowerCase() === '#000000' || hex.toLowerCase() === '#000') {
                    SavedNumberHexIMG = "2";
                } else if (hex.toLowerCase() === '#031f40') {
                    SavedNumberHexIMG = "3";
                } else {
                    // For any other color, don't set a combination number
                    SavedNumberHexIMG = "";
                }
            }

            // Save current combination state back to localStorage
            localStorage.setItem('q10_current_combination', JSON.stringify({
                bg: SavedNumberHexBG,
                img: SavedNumberHexIMG
            }));

            // Track used combinations
            let usedCombinations = JSON.parse(localStorage.getItem('q10_combinations') || '[]');

            // Check if current combination is valid and new
            if (SavedNumberHexBG && SavedNumberHexIMG && SavedNumberHexBG !== SavedNumberHexIMG) {
                const combo = SavedNumberHexBG + '-' + SavedNumberHexIMG;
                if (!usedCombinations.includes(combo) && combo !== "2-3" && combo !== "3-2") {
                    usedCombinations.push(combo);
                    localStorage.setItem('q10_combinations', JSON.stringify(usedCombinations));
                }
            }

            // Update the filled indicators
            const activation_10 = usedCombinations.length;
            for (let i = 1; i <= 4; i++) {
                let element = document.querySelector(`.show10_${i}`);
                if (element) {
                    if (i <= activation_10) {
                        element.classList.add('filled');
                    } else {
                        element.classList.remove('filled');
                    }
                }
            }

            if (activation_10 === 4) {
                activation_10_1 = true;
            } else {
                activation_10_1 = false;
            }

            // Save to localStorage
            localStorage.setItem('q10_color', JSON.stringify({ r, g, b, h, s, l, hex }));
        }
        
        // Handle RGB input
        function handleRgbInput(e) {
            const value = e.target.value.replace(/[^\d,]/g, '');
            const parts = value.split(',').map(p => parseInt(p.trim()));
            if (parts.length === 3 && parts.every(p => p >= 0 && p <= 255)) {
                const [r, g, b] = parts;
                const [h, s, l] = rgbToHsl(r, g, b);
                const hex = rgbToHex(r, g, b);
                updateDisplays(r, g, b, h, s, l, hex);
            }
        }
        
        // Handle HSL input
        function handleHslInput(e) {
            const value = e.target.value.replace(/[^\d,]/g, '');
            const parts = value.split(',').map(p => parseInt(p.trim()));
            if (parts.length === 3 && parts[0] >= 0 && parts[0] <= 360 && parts[1] >= 0 && parts[1] <= 100 && parts[2] >= 0 && parts[2] <= 100) {
                const [h, s, l] = parts;
                const [r, g, b] = hslToRgb(h, s, l);
                const hex = rgbToHex(r, g, b);
                updateDisplays(r, g, b, h, s, l, hex);
            }
        }
        
        // Handle HEX input
        hexInput.addEventListener('blur', function(e) {
            let hex = e.target.value.trim();
            if (!hex.startsWith('#')) hex = '#' + hex;
            if (/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(hex)) {
                const [r, g, b] = hexToRgb(hex);
                const [h, s, l] = rgbToHsl(r, g, b);
                updateDisplays(r, g, b, h, s, l, hex);
            }
        });

        hexInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                let hex = e.target.value.trim();
                if (!hex.startsWith('#')) hex = '#' + hex;
                if (/^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(hex)) {
                    const [r, g, b] = hexToRgb(hex);
                    const [h, s, l] = rgbToHsl(r, g, b);
                    updateDisplays(r, g, b, h, s, l, hex);
                }
            }
        });
        
        // Update color from wheel click
        function updateColor(x, y) {
            const centerX = size / 2;
            const centerY = size / 2;
            
            const dx = x - centerX;
            const dy = y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxRadius = size / 2;
            
            if (distance > maxRadius) return;
            
            const angle = Math.atan2(dy, dx);
            const hue = (angle * 180 / Math.PI + 90 + 360) % 360;
            const saturation = Math.min((distance / maxRadius) * 100, 100);
            const lightness = 50;
            
            const [r, g, b] = hslToRgb(hue, saturation, lightness);
            const hex = rgbToHex(r, g, b);
            
            updateDisplays(r, g, b, hue, saturation, lightness, hex);
            
            marker.style.left = x + 'px';
            marker.style.top = y + 'px';
        }
        
        // Mouse events
        let isDragging = false;
        
        canvas.addEventListener('mousedown', function(e) {
            isDragging = true;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            updateColor(x, y);
        });
        
        canvas.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            updateColor(x, y);
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        // Load saved color
        const savedColor = localStorage.getItem('q10_color');
        if (savedColor) {
            const color = JSON.parse(savedColor);
            updateDisplays(color.r, color.g, color.b, color.h, color.s, color.l, color.hex);
        } else {
            // Default color
            updateDisplays(255, 0, 0, 0, 100, 50, '#ff0000');
        }
        
        // Selection toggle functions - assign to window to make accessible from HTML onclick
        window.LogoButton10 = function() {
            if (window.event) {
                window.event.stopPropagation();
            }
            const logo = document.querySelector('.logo_image10');
            logo.classList.add('selectedimg');
            const bg = document.querySelector('.logo_preview10');
            bg.classList.remove('selectedbg');
            
            // Re-apply current color
            const savedColor = localStorage.getItem('q10_color');
            if (savedColor) {
                const color = JSON.parse(savedColor);
                updateDisplays(color.r, color.g, color.b, color.h, color.s, color.l, color.hex);
            }
        };
        
        window.bgButton = function() {
            const logo = document.querySelector('.logo_image10');
            logo.classList.remove('selectedimg');
            const bg = document.querySelector('.logo_preview10');
            bg.classList.add('selectedbg');
            
            // Re-apply current color
            const savedColor = localStorage.getItem('q10_color');
            if (savedColor) {
                const color = JSON.parse(savedColor);
                updateDisplays(color.r, color.g, color.b, color.h, color.s, color.l, color.hex);
            }
        };
    });
    
    // Hover functions can stay outside
    function LogoHover10() {
        const logo = document.querySelector('.logo_image10');
        const bg = document.querySelector('.logo_preview10');
        logo.classList.add('hovered10');
        bg.classList.remove('hovered10');
    }
    function LogoAntiHover10() {
        const logo = document.querySelector('.logo_image10');
        logo.classList.remove('hovered10');
        const bg = document.querySelector('.logo_preview10');
        bg.classList.add('hovered10');
    }
    function bgHover() {
        const logo = document.querySelector('.logo_preview10');
        logo.classList.add('hovered10');
    }
    function bgAntiHover() {
        const logo = document.querySelector('.logo_preview10');
        logo.classList.remove('hovered10');
    }
    
    // Auto-select background on page load
    const bg = document.querySelector('.logo_preview10');
    if (bg) {
        bg.classList.add('selectedbg');
    }
}

//Q11 - Radiobuttons 2

if (document.querySelector(".q11")) {
    document.addEventListener('DOMContentLoaded', function() {
        let radioButtons = document.querySelectorAll('input[name="email_vorlage"]');
        radioButtons.forEach(function(radio) {
            let savedValue = localStorage.getItem("selected_email");
            if (savedValue === radio.id) {
                radio.checked = true;
            }
            radio.addEventListener('change', function() {
                if (radio.checked) {
                    localStorage.setItem("selected_email", radio.id);
                    activationQ11();
                }
            });
            activationQ11();
        });

        function activationQ11() {
            if (document.getElementById("option_C").checked) {
                activation_11 = true;
            }
            else {
                activation_11 = false;
            }
        }
    });
    
}

//Q12 - Checkboxes 3
if (document.querySelector(".q12")) {
    document.addEventListener('DOMContentLoaded', function() {
        let checkboxes = document.querySelectorAll('.checkbox_12');

        checkboxes.forEach(function(checkbox) {
            let savedState = localStorage.getItem(checkbox.id);
            if (savedState === 'true') {
                checkbox.checked = true;
            } else if (savedState === 'false') {
                checkbox.checked = false;
            }

            checkbox.addEventListener('change', function() {
                localStorage.setItem(this.id, this.checked);
            });
        });
    });
}

//QListening - Hörverständnis
if (document.querySelector(".qlistening")) {
    document.addEventListener('DOMContentLoaded', function() {
        let input = document.getElementById("listening_answer");
        let listening_answer = input.value;
        if (input) {
            input.addEventListener('input', function() {
                listening_answer = input.value;
                activationQListening();
            });
        }
        let audio = document.querySelector(".audio");
        if (audio) {
            audio.addEventListener('ended', function() {
                audiofinished = true;
                activationQListening();
            })
        }
        function activationQListening() {
            if (listening_answer === "9" && audiofinished == true) {
                activation_listening = true;
            }
        }
    })

}


