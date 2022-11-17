const tableManager = new TableManager("root");

function initTable() {
	tableManager.createTable();
	makeActiveButtons();
}

function createRow() {
	tableManager.addRow();
}

function removeRow() {
	const id = +document.getElementById("row-id").value;

	if (!Number.isInteger(id)) {
		return alert("Введите число!");
	}

	const isExist = tableManager.rowsId.includes(id);

	if (!isExist) {
		return alert(`Строки с номером ${id} не существует!`);
	}

	tableManager.removeRow(id);
}

function makeActiveButtons() {
	document.getElementById("add-row").disabled = false;
	document.getElementById("remove-row").disabled = false;
	document.getElementById("row-id").disabled = false;
}
