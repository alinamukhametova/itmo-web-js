const tableStatus = {
	NOT_CREATED: "not-created",
	CREATED: "created",
};

const TABLE_ID = "table-id";

class TableManager {
	currentStatus = tableStatus.NOT_CREATED;
	rowsId = [0];
	constructor(root) {
		this.root = root;
	}

	createTable() {
		if (this.currentStatus === tableStatus.CREATED) {
			return alert("Таблица уже создана");
		}

		this.currentStatus = tableStatus.CREATED;
		const tableElement = document.createElement("table");
		tableElement.id = TABLE_ID;

		const tbody = document.createElement("tbody");
		tbody.id = "tbody";
		this.addRow(true, tbody);

		const rootElement = document.getElementById(this.root);
		tableElement.append(tbody);
		rootElement.append(tableElement);
	}

	addRow(isHeader = false, appendTo = document.getElementById("tbody")) {
		if (this.currentStatus === tableStatus.NOT_CREATED) {
			return alert("Невозможно добавить строку, сначала создайте таблицу");
		}

		const id = Math.max(...this.rowsId) + 1;

		if (!isHeader) {
			this.rowsId.push(id);
		}

		const cellElementName = isHeader ? "th" : "td";
		const todoText = isHeader ? "To-do" : "Купить молоко";
		const idText = isHeader ? "№" : id;

		const row = document.createElement("tr");

		if (!isHeader) {
			row.id = "row-id-" + id;
		}

		const cellId = document.createElement(cellElementName);
		const cellText = document.createElement(cellElementName);

		cellId.textContent = idText;
		cellText.textContent = todoText;

		row.append(cellId);
		row.append(cellText);

		appendTo.append(row);
	}

	removeRow(id) {
		document.getElementById("row-id-" + id).remove();
		this.rowsId = this.rowsId.filter((rowId) => rowId !== id);
	}
}
