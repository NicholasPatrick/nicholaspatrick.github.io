import init, { sum, modex_string, is_prime_string, factor_string, partition_string, factorial_string, derangement_string } from "./pkg/panic_calculators.js";

async function run() {
  await init();

  document.getElementById("sum_button").onclick = () => {
    const a = document.getElementById("sum_a").value;
    const b = document.getElementById("sum_b").value;
    const result = sum(a, b);
    document.getElementById("sum_result").textContent = result;
  };

  document.getElementById("modex_button").onclick = () => {
    const a = document.getElementById("modex_a").value;
    const b = document.getElementById("modex_b").value;
    const m = document.getElementById("modex_m").value;
    const result = modex_string(a, b, m);
    document.getElementById("modex_result").textContent = result;
  };

  document.getElementById("prime_button").onclick = () => {
    const n = document.getElementById("prime_n").value;
    const result = is_prime_string(n);
    document.getElementById("prime_result").textContent = result;
  };

  document.getElementById("factor_button").onclick = () => {
    const n = document.getElementById("factor_n").value;
    const result = factor_string(n);
    document.getElementById("factor_result").textContent = result;
  };

  document.getElementById("partition_button").onclick = () => {
    const a = document.getElementById("partition_a").value;
    const m = document.getElementById("partition_m").value;
    const result = partition_string(a, m);
    document.getElementById("partition_result").textContent = result;
  };

  document.getElementById("factorial_button").onclick = () => {
    const a = document.getElementById("factorial_a").value;
    const m = document.getElementById("factorial_m").value;
    const result = factorial_string(a, m);
    document.getElementById("factorial_result").textContent = result;
  };

  document.getElementById("derangement_button").onclick = () => {
    const a = document.getElementById("derangement_a").value;
    const m = document.getElementById("derangement_m").value;
    const result = derangement_string(a, m);
    document.getElementById("derangement_result").textContent = result;
  };
}

run();
