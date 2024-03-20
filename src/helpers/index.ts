
export const getTransferProcess = ({
  inventoryItems
}: {
  inventoryItems: {
    qty?: number
    remaining_qty?: number
  }[]
}) => {
  let {
    qty,
    remaining_qty
  } = inventoryItems?.reduce(({
    qty = 0,
    remaining_qty = 0
  }, item) => {
    return {
      qty: Number(qty) + Number(item.qty),
      remaining_qty: Number(remaining_qty) + Number(item.remaining_qty)
    }
  }, {
    qty: 0,
    remaining_qty: 0
  }) || {
      qty: 0,
      remaining_qty: 0
    }
  let received = Number(qty) - Number(remaining_qty)
  let process = received / Number(qty) * 100
  return {
    qty,
    remaining_qty,
    received_qty: received,
    process
  }
}