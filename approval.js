document.getElementById('approvalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const applicationId = document.getElementById('applicationId').value;
    const action = event.submitter.value;

    fetch(`/processApplication?action=${action}&applicationId=${applicationId}`, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        // レスポンスを処理する
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
