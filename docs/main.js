import init, { sum, gcd_string, lcm_string, kronecker_symbol_string, modex_string, is_prime_string, factor_string, partition_string, factorial_string, derangement_string, binomial_greater_string } from "../pkg/panic_calculators.js";

async function run() {
  await init();

  document.getElementById("sum_button").onclick = () => {
    try {
      const a = document.getElementById("sum_a").value;
      const b = document.getElementById("sum_b").value;
      const result = sum(a, b);
      document.getElementById("sum_result").textContent = result;
    } catch (err) {
      document.getElementById("sum_a").reportValidity();
      document.getElementById("sum_b").reportValidity();
    }
  };

  document.getElementById("gcd_button").onclick = () => {
    try {
      const a = document.getElementById("gcd_a").value;
      const b = document.getElementById("gcd_b").value;
      const result = gcd_string(a, b);
      document.getElementById("gcd_result").textContent = result;
    } catch (err) {
      document.getElementById("gcd_a").reportValidity();
      document.getElementById("gcd_b").reportValidity();
    }
  };

  document.getElementById("lcm_button").onclick = () => {
    try {
      const a = document.getElementById("lcm_a").value;
      const b = document.getElementById("lcm_b").value;
      const result = lcm_string(a, b);
      document.getElementById("lcm_result").textContent = result;
    } catch (err) {
      document.getElementById("lcm_a").reportValidity();
      document.getElementById("lcm_b").reportValidity();
    }
  };

  document.getElementById("kronecker_button").onclick = () => {
    try {
      const a = document.getElementById("kronecker_a").value;
      const b = document.getElementById("kronecker_b").value;
      const result = kronecker_symbol_string(a, b);
      document.getElementById("kronecker_result").textContent = result;
    } catch (err) {
      document.getElementById("kronecker_a").reportValidity();
      document.getElementById("kronecker_b").reportValidity();
    }
  };

  document.getElementById("modex_button").onclick = () => {
    try {
      const a = document.getElementById("modex_a").value;
      const b = document.getElementById("modex_b").value;
      const m = document.getElementById("modex_m").value;
      const result = modex_string(a, b, m);
      document.getElementById("modex_result").textContent = result;
    } catch (err) {
      document.getElementById("modex_a").reportValidity();
      document.getElementById("modex_b").reportValidity();
      document.getElementById("modex_m").reportValidity();
    }
  };

  document.getElementById("prime_button").onclick = () => {
    try {
      const n = document.getElementById("prime_n").value;
      const result = is_prime_string(n);
      document.getElementById("prime_result").textContent = result;
    } catch (err) {
      document.getElementById("prime_n").reportValidity();
    }
  };

  document.getElementById("factor_button").onclick = () => {
    try {
      const n = document.getElementById("factor_n").value;
      const result = factor_string(n);
      document.getElementById("factor_result").textContent = result;
    } catch (err) {
      document.getElementById("factor_n").reportValidity();
    }
  };

  document.getElementById("partition_button").onclick = () => {
    try {
      const a = document.getElementById("partition_a").value;
      const m = document.getElementById("partition_m").value;
      const result = partition_string(a, m);
      document.getElementById("partition_result").textContent = result;
    } catch (err) {
      document.getElementById("partition_a").reportValidity();
      document.getElementById("partition_m").reportValidity();
    }
  };

  document.getElementById("factorial_button").onclick = () => {
    try {
      const a = document.getElementById("factorial_a").value;
      const m = document.getElementById("factorial_m").value;
      const result = factorial_string(a, m);
      document.getElementById("factorial_result").textContent = result;
    } catch (err) {
      document.getElementById("factorial_a").reportValidity();
      document.getElementById("factorial_m").reportValidity();
    }
  };

  document.getElementById("derangement_button").onclick = () => {
    try {
      const a = document.getElementById("derangement_a").value;
      const m = document.getElementById("derangement_m").value;
      const result = derangement_string(a, m);
      document.getElementById("derangement_result").textContent = result;
    } catch (err) {
      document.getElementById("derangement_a").reportValidity();
      document.getElementById("derangement_m").reportValidity();
    }
  };

  document.getElementById("binomial_greater_button").onclick = () => {
    try {
      const n = document.getElementById("binomial_greater_n").value;
      const k = document.getElementById("binomial_greater_k").value;
      const p = document.getElementById("binomial_greater_p").value;
      const result = binomial_greater_string(n, k, p);
      document.getElementById("binomial_greater_result").textContent = result;
    } catch (err) {
      document.getElementById("binomial_greater_n").reportValidity();
      document.getElementById("binomial_greater_k").reportValidity();
      document.getElementById("binomial_greater_p").reportValidity();
    }
  };
}

run();
