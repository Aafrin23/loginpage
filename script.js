
function validate(){
            
        
            var paswrd = document.getElementById("paswrd").value;
            var cnfrm = document.getElementById("cnfrmpaswrd").value;
            var error = document.getElementById("error-message")
            

            if (paswrd !== cnfrm) {
                
                error.style.display = "block";
                return false;
            }
            alert("Logged in successfully!"); 
            return true;
        

        }
        document.getElementById('togglePassword').addEventListener('click', function () {
            var passwordField = document.getElementById('paswrd');
            var type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
            // Toggles the icon between eye and eye-slash
        });