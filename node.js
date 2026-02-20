
        // Image upload functionality
        const uploadArea = document.getElementById('upload-area');
        const imageUpload = document.getElementById('image-upload');
        const imagePreview = document.getElementById('image-preview');
        const printDesign = document.getElementById('print-design');
        const printBtn = document.getElementById('print-btn');
        const previewShirt = document.getElementById('preview-shirt');
        const dressColor = document.getElementById('dress-color');

        // Click on upload area triggers file input
        uploadArea.addEventListener('click', () => {
            imageUpload.click();
        });

        // Handle file selection
        imageUpload.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                
                reader.addEventListener('load', function() {
                    imagePreview.style.display = 'block';
                    imagePreview.src = this.result;
                    
                    printDesign.style.display = 'block';
                    printDesign.src = this.result;
                });
                
                reader.readAsDataURL(file);
            }
        });

        // Print button functionality
        printBtn.addEventListener('click', function() {
            if (printDesign.style.display === 'block') {
                alert('Your custom design has been added to the dress! Proceeding to checkout.');
                // In a real application, this would redirect to a checkout page
            } else {
                alert('Please upload an image first!');
            }
        });

        // Change dress color
        dressColor.addEventListener('change', function() {
            const color = this.value;
            previewShirt.style.backgroundColor = color;
        });

        // Initialize with white shirt
        previewShirt.style.backgroundColor = 'white';

        // Drag and drop functionality
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.borderColor = 'var(--accent)';
            this.style.backgroundColor = 'rgba(230, 178, 198, 0.1)';
        });

        uploadArea.addEventListener('dragleave', function() {
            this.style.borderColor = '#ddd';
            this.style.backgroundColor = 'transparent';
        });

        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.borderColor = '#ddd';
            this.style.backgroundColor = 'transparent';
            
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                reader.addEventListener('load', function() {
                    imagePreview.style.display = 'block';
                    imagePreview.src = this.result;
                    
                    printDesign.style.display = 'block';
                    printDesign.src = this.result;
                });
                
                reader.readAsDataURL(file);
            } else {
                alert('Please drop a valid image file!');
            }
        });