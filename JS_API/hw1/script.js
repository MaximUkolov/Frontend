const scheduleData = [
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
];

const scheduleBody = document.getElementById('scheduleBody');

function updateSchedule() {
    scheduleBody.innerHTML = '';
    scheduleData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.time}</td>
            <td>${item.maxParticipants}</td>
            <td>${item.currentParticipants}</td>
            <td><button onclick="enroll(${item.id})" ${item.currentParticipants >= item.maxParticipants ? 'disabled' : ''}>Записаться</button></td>
            <td><button onclick="cancelEnrollment(${item.id})" ${item.currentParticipants > 0 ? '' : 'disabled'}>Отменить запись</button></td>
        `;
        scheduleBody.appendChild(row);
    });
}

function enroll(id) {
    const scheduleItem = scheduleData.find(item => item.id === id);
    if (scheduleItem.currentParticipants < scheduleItem.maxParticipants) {
        scheduleItem.currentParticipants++;
        updateSchedule();
    }
}

function cancelEnrollment(id) {
    const scheduleItem = scheduleData.find(item => item.id === id);
    if (scheduleItem.currentParticipants > 0) {
        scheduleItem.currentParticipants--;
        updateSchedule();
    }
}

updateSchedule();