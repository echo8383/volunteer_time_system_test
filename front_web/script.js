async function downloadPdf() {
    const studentId = document.getElementById('studentId').value.trim();
    if (!studentId) {
        alert("请输入学号！");
        return;
    }

    const url = `http://localhost:8081/api/volunteer/${studentId}/pdf`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("下载失败，请检查学号是否正确");

        const blob = await response.blob();
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `志愿服务证明-${studentId}.pdf`;
        link.click();
        window.URL.revokeObjectURL(link.href);
    } catch (err) {
        console.error(err);
        alert("❌ 下载失败，请稍后重试！");
    }
}
