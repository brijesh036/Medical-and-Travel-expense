function generatePDF() {
    const element = document.getElementById('pdf-content');
    const opt = {
        margin:       0.5,
        filename:     'medical_travel_expense.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['css', 'legacy'] }
      };
    }      