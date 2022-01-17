const generate_ip_addresses = (data) => {
	const valid_ips = [];
	for (let first_len = 1; first_len <= 3; ++first_len)
    for (let second_len = 1; second_len <= 3; ++second_len)
    for (let thrid_len = 1; thrid_len <= 3; ++thrid_len)
    for (let fourth_len = 1; fourth_len <= 3; ++fourth_len) {
        if (first_len + second_len + thrid_len + fourth_len === data.length) {
            const first_octet = parseInt(data.substring(0, first_len), 10),
            second_octet = parseInt(data.substring(first_len, first_len + second_len), 10),
            third_octet = parseInt(data.substring(first_len + second_len, first_len + second_len + thrid_len), 10),
            fourth_octet = parseInt(data.substring(first_len + second_len + thrid_len, first_len + second_len + thrid_len + fourth_len), 10);
            if (first_octet <= 255 && second_octet <= 255 && third_octet <= 255 && fourth_octet <= 255) {
                const address = [
                    first_octet.toString(), ".",
                    second_octet.toString(), ".",
                    third_octet.toString(), ".",
                    fourth_octet.toString()
                ].join("");
                if (address.length === data.length + 3) valid_ips.push(address)
            }
        }
    }
	return `[${valid_ips.join(', ')}]`;
}

console.log(generate_ip_addresses('1312919188'));