// ===== Account Page Script =====

function initAccountPage() {
    const userData = getUserData();
    populateUserProfile(userData);
    setupAccountMenu();
}

function populateUserProfile(userData) {
    const nameElement = document.querySelector('.account-user-name');
    const emailElement = document.querySelector('.account-user-email');

    if (nameElement) nameElement.textContent = userData.name;
    if (emailElement) emailElement.textContent = userData.email;
}

function setupAccountMenu() {
    const menuItems = document.querySelectorAll('.account-menu a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active from all items
            menuItems.forEach(menu => menu.classList.remove('active'));
            item.classList.add('active');

            // Hide all sections
            document.querySelectorAll('.account-section').forEach(section => {
                section.classList.remove('active');
            });

            // Show selected section
            const sectionId = item.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('active');

                // Initialize section-specific content
                if (sectionId === 'profile-section') {
                    initProfileSection();
                } else if (sectionId === 'addresses-section') {
                    initAddressesSection();
                } else if (sectionId === 'preferences-section') {
                    initPreferencesSection();
                }
            }
        });
    });

    // Show profile section by default
    menuItems[0]?.click();
}

function initProfileSection() {
    const userData = getUserData();
    
    // Populate form fields
    document.getElementById('fullName').value = userData.name;
    document.getElementById('email').value = userData.email;
    document.getElementById('phone').value = userData.phone;

    // Save button handler
    const saveBtn = document.querySelector('#profile-section .btn-save');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            userData.name = document.getElementById('fullName').value;
            userData.email = document.getElementById('email').value;
            userData.phone = document.getElementById('phone').value;
            
            saveUserData(userData);
            populateUserProfile(userData);
            alert('Profile updated successfully!');
        });
    }
}

function initAddressesSection() {
    const userData = getUserData();
    const addressContainer = document.getElementById('addressesContainer');

    if (!addressContainer) return;

    if (!userData.addresses || userData.addresses.length === 0) {
        addressContainer.innerHTML = '<p style="color: var(--text-light); text-align: center; padding: 20px;">No addresses saved yet</p>';
    } else {
        addressContainer.innerHTML = userData.addresses.map((addr, index) => `
            <div class="address-card ${addr.default ? 'default' : ''}">
                <div class="address-info">
                    ${addr.label}<br>
                    ${addr.street}<br>
                    ${addr.city} - ${addr.zipcode}
                </div>
                <div class="address-actions">
                    <button class="address-btn" onclick="editAddress(${index})">Edit</button>
                    <button class="address-btn" onclick="deleteAddress(${index})">Delete</button>
                </div>
            </div>
        `).join('');
    }

    // Add address button
    const addBtn = document.querySelector('#addresses-section .btn-save');
    if (addBtn) {
        addBtn.textContent = 'Add New Address';
        addBtn.onclick = () => {
            const newAddr = {
                label: 'Home',
                street: '123 Main St',
                city: 'Mumbai',
                zipcode: '400001',
                default: userData.addresses?.length === 0
            };
            if (!userData.addresses) userData.addresses = [];
            userData.addresses.push(newAddr);
            saveUserData(userData);
            initAddressesSection();
        };
    }
}

function editAddress(index) {
    const userData = getUserData();
    const addr = userData.addresses[index];
    alert(`Edit address: ${addr.label} - ${addr.street}`);
}

function deleteAddress(index) {
    const userData = getUserData();
    if (confirm('Delete this address?')) {
        userData.addresses.splice(index, 1);
        saveUserData(userData);
        initAddressesSection();
    }
}

function initPreferencesSection() {
    const preferences = JSON.parse(localStorage.getItem('grabz_preferences')) || {
        notifications: true,
        newsletter: false,
        savedCards: true
    };

    // Setup toggle switches
    Object.keys(preferences).forEach(key => {
        const toggle = document.getElementById(`pref-${key}`);
        if (toggle) {
            toggle.classList.toggle('active', preferences[key]);
            toggle.addEventListener('click', () => {
                preferences[key] = !preferences[key];
                toggle.classList.toggle('active');
                localStorage.setItem('grabz_preferences', JSON.stringify(preferences));
            });
        }
    });
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('grabz_user');
        localStorage.removeItem('grabz_cart');
        alert('Logged out successfully');
        navigateTo('../index.html');
    }
}

// Initialize account page
document.addEventListener('DOMContentLoaded', () => {
    initAccountPage();

    // Logout button
    const logoutBtn = document.querySelector('.account-logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});
