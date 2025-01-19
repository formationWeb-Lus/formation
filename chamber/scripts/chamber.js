async function loadMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const membersContainer = document.getElementById('members-container');
    membersContainer.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Website</a>
            <p><strong>Membership: ${member.membershipLevel === 1 ? 'Member' : member.membershipLevel === 2 ? 'Silver' : 'Gold'}</strong></p>
        `;
        membersContainer.appendChild(memberCard);
    });
}

// Toggle between grid view and list view
document.getElementById('toggleView').addEventListener('click', () => {
    const membersContainer = document.getElementById('members-container');
    membersContainer.classList.toggle('grid-view');
    membersContainer.classList.toggle('list-view');
});

// Display current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
loadMembers();