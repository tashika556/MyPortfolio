def hybrid_consensus(transaction):  
    # Critical public audits (voting, property) → Public chain  
    if transaction.type in ["VOTE", "LAND_REGISTRY"]:  
        public_chain.submit(  
            tx_hash = sha256(transaction.data),  # On-chain hash only  
            metadata = {"DID": transaction.issuer}  
        )  
    # Private data (healthcare, taxes) → Permissioned subnet  
    else:  
        permissioned_subnet.submit(  
            encrypted_data = aes_encrypt(transaction.data, key=user_key),  
            zk_proof = generate_zkp(transaction.validity_rules)  # e.g., age > 18  
        )  